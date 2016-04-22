var Backbone = require('backbone');
var _ = require('underscore');
var MenuItemView = require('./MenuItemView');
var dispatcher = require('../dispatcher');

// This view will render the list of apps in a certain category
// when you click the edit button for a certain category in the
// category list view

// Each of these items in the list will be a separate child view,
// (individual menuItemViews)

var MenuItemListView = Backbone.View.extend({

    className: 'category-list',

    initialize: function (options) {
        this.children = [];
        this.type = options.type;
        this.listenTo(this.collection, 'sync destroy', this.render);
    },

    render: function () {
        var _this = this;

        this.children.forEach(function (view) {
            view.remove();
        });

        this.children = this.collection.map(function (currentModel) {
            return new MenuItemView({ model: currentModel });
        });

        this.children.forEach(function (view) {
            view.render();
            _this.$el.append(view.$el);
        });

        dispatcher.trigger('nav', [
            { title: 'Back', action: this.goBack.bind(this) },
            { title: 'Create', action: this.toCreate.bind(this) },
            { title: 'Delete Selected', action: this.onDeleteSelectedClick.bind(this) }
        ]);
    },

    toCreate: function () {
        window.location.hash = '/menuItemForm/' + this.type;
    },

    onDeleteSelectedClick: function () {
        this.children.forEach(function (view) {
            if (view.selected) {
                view.model.destroy();
            }
        });
    },

    goBack: function () {
        window.location.hash = '/categoryList';
    }

});

module.exports = MenuItemListView;
