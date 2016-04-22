var Backbone = require('backbone');
var _ = require('underscore');
var SingleTableView = require('./SingleTableView');
var dispatcher = require('../dispatcher');

var TablesGridView = Backbone.View.extend({

    className: 'grid',

    initialize: function () {
        this.children = [];
    },

    render: function () {
        var _this = this;
        var message = this.collection.length > 0 ? '' : 'You have no open tables.';

        this.$el.html(message);

        this.children.forEach(function (view) {
            view.remove();
        });

        this.children = this.collection.map(function (currentModel) {
            return new SingleTableView({ model: currentModel });
        });

        this.children.forEach(function (view) {
            view.render();
            _this.$el.append(view.$el);
        });

        dispatcher.trigger('nav', [
            {
                title: 'Back',
                action: this.toHome.bind(this)
            },
            {
                title: 'New Table',
                action: this.createTable.bind(this)
            }
        ]);
    },

    createTable: function () {
        this.collection.create({});
    },

    toHome: function () {
        window.location.hash = '';
    }

});

module.exports = TablesGridView;