var Backbone = require('backbone');
var _ = require('underscore');
var CategoryItemView = require('./CategoryItemView');
var dispatcher = require('../dispatcher');

// This view, will generate 6 child views, each one will be a 
// CategoryItemView, they will each contain two buttons that send you
// to either the edit or add menu item views

var CategoryListView = Backbone.View.extend({

    className: 'category-table',

    initialize: function () {
        this.children = [];
        this.render();
    },

    render: function () {
        var _this = this;

        this.children.forEach(function (view) {
            view.remove();
        });

        this.children = this.collection.map(function (currentModel) {
            return new CategoryItemView({ model: currentModel });
        });

        this.children.forEach(function (view) {
            view.render();
            _this.$el.append(view.$el);
        });

        dispatcher.trigger('nav', [
            { title: 'Back', action: this.toHome.bind(this) }
        ]);
    },

    toHome: function () {
        window.location.hash = '';
    }

});

module.exports = CategoryListView;