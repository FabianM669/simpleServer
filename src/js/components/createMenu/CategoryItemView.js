var Backbone = require('backbone');
var _ = require('underscore');

// This will be the view we generate into 6 individual child views
// in the CategoryListView

var CategoryItemView = Backbone.View.extend({

    className: 'category',

    template: _.template(require('./templates/categoryItem.html')),

    initialize: function () {
        this.children = [];
    },

    render: function () {
        this.$el.html(this.template(this.model.attributes));
    },

    events: {
        'click': 'toMenuItemListView'
    },

    toMenuItemListView: function () {
        window.location.hash = '/menuItemList/' + this.model.attributes.type;
    }
});

module.exports = CategoryItemView;