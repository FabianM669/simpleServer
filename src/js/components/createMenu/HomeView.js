var Backbone = require('backbone');
var _ = require('underscore');

// If there is no menu, this will be the 1st View the app renders

var CreateMenuView = Backbone.View.extend({

    className: 'home',

    template: _.template(require('./templates/home.html')),

    render: function () {
        this.$el.html(this.template());
    },

    events: {
        'click #toCategoryListView': 'toCategoryListView',
        'click #toTablesGridView': 'toTablesGridView'
    },

    toCategoryListView: function () {
        this.remove();
        window.location.hash = 'categoryList';
    },

    toTablesGridView: function () {
        this.remove();
        window.location.hash = 'tables';
    }

});

module.exports = CreateMenuView;