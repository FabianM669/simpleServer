var Backbone = require('backbone');
var _ = require('underscore');

var ServingCategoryItemView = Backbone.View.extend({

    className: 'box',

    template: _.template(require('./templates/servingCategoryItem.html')),

    events: {
        'click': 'goToSelectMenuItem'
    },

    initialize: function (options) {
        this.customer = options.customer;
    },

    render: function () {
        this.$el.html(this.template(this.model.attributes));
    },

    goToSelectMenuItem: function () {
        window.location.hash = '/tables/' + this.customer.get('tableId') + '/order/' + this.customer.get('id') + '/' + this.model.get('type');
    }
});

module.exports = ServingCategoryItemView;
