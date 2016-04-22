var Backbone = require('backbone');
var _ = require('underscore');

var ServingMenuItemView = Backbone.View.extend({

    className: 'box',

    template: _.template(require('./templates/servingMenuItem.html')),

    events: {
        'click': 'onClick'
    },

    initialize: function (options) {
        this.customer = options.customer;

        var order = this.customer.get('order');
        var menuItemId = this.model.get('id');

        this.selected = order.indexOf(menuItemId) !== -1;
    },

    render: function () {
        this.$el.html(this.template(this.model.attributes));

        if (this.selected) {
            this.$el.addClass('is-selected');
        } else {
            this.$el.removeClass('is-selected');
        }
    },

    onClick: function () {
        var order = this.customer.get('order');
        var menuItemId = this.model.get('id');

        var indexOfMenuItem;
        // If the order doesn't contain the menu item and the checkbox
        // is checked, add the menu item to the order array. If not,
        // remove it.
        if (!this.selected) {
            order.push(this.model.get('id'));
            this.selected = true;
        } else {
            indexOfMenuItem = order.indexOf(menuItemId);
            order.splice(indexOfMenuItem, 1);
            this.selected = false;
        }

        this.customer.save();

        this.render();
    }
});

module.exports = ServingMenuItemView;