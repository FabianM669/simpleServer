var Backbone = require('backbone');

// This view will give me the 'breadcrumbs' nav bar, at the top of my 
// edit and add menu item views

var BreadcrumbsView = Backbone.View.extend({

    className: 'breadcrumbs',

    initialize: function () {
        this.listenTo(Backbone.history, 'route', this.render);
    },

    render: function () {
        var route = window.location.hash.split('/').join(' -> ');
        route = route.replace('#', '');
        this.$el.html(route);
    }

});

module.exports = BreadcrumbsView;