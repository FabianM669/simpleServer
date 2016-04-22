var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var MenuItemView = Backbone.View.extend({

    className: 'category',

    events: {
        'click input[type=checkbox]': 'toggleSelected',
        'click': 'goToEdit'
    },

    template: _.template(require('./templates/menuItem.html')),

    render: function () {
        this.$el.html(this.template(this.model.attributes));
    },

    toggleSelected: function (e) {
        this.selected = this.$('input[type=checkbox]').is(':checked');
    },

    goToEdit: function (e) {
        if (e.target.matches('input') || this.$('.actions').has(e.target).length > 0) {
            return;
        }
        window.location.hash = '/editItem/' + this.model.attributes.type;
    }

});

module.exports = MenuItemView;
