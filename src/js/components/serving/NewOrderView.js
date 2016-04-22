var Backbone = require('backbone');
var dispatcher = require('../dispatcher');
var ServingCategoryItemView = require('./ServingCategoryItemView');

var NewOrderView = Backbone.View.extend({

    className: 'grid',

    events: {
        'click .backButton': 'toTable'
    },

    initialize: function (options) {
        this.children = [];
        this.listenTo(this.collection, 'sync destroy', this.render);
    },

    render: function () {
        var _this = this;

        this.children.forEach(function (view) {
            view.remove();
        });

        this.children = this.collection.map(function (currentModel) {
            return new ServingCategoryItemView({
                customer: _this.model,
                model: currentModel
            });
        });

        this.children.forEach(function (view) {
            view.render();
            _this.$el.append(view.$el);
        });

        dispatcher.trigger('nav', [
            {
                title: 'Back',
                action: this.toTable.bind(this)
            }
        ]);
    },

    toTable: function () {
        window.location.hash = '/tables/' + this.model.get('tableId');
    }

});

module.exports = NewOrderView;