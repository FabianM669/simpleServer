var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var dispatcher = require('../dispatcher.js');
var BreadcrumbsView = require('../breadcrumbs/BreadcrumbsView');
var HomeView = require('../createMenu/HomeView');
var CategoryListView = require('../createMenu/CategoryListView');
var NavView = require('../nav/NavView');

// This view will contain all the different views of my app and renders
// different ones, depending on events triggered, this view will later
// be appended to my entry point in the main.js file

var AppView = Backbone.View.extend({

    className: 'app',

    template: _.template(require('./templates/app.html')),

    initialize: function () {
        this.navView = new NavView();
        // this.breadcrumbsView = new BreadcrumbsView();
        this.listenTo(dispatcher, 'show', this.show);
    },

    render: function () {
        this.$el.html(this.template());
        // Render breadcrumbs view
        // this.breadcrumbsView.render();
        // this.$el.append(this.breadcrumbsView.$el);
        // Render nav view
        this.navView.render();
        this.$el.append(this.navView.$el);
    },

    retrace: function () {
        this.savedView.render();
    },

    show: function (view) {
        if (this.savedView) {
            this.savedView.remove();
        };

        view.render();
        this.$('.page-slot').append(view.$el);
        this.savedView = view;

        this.listenTo(this.savedView.collection, 'sync', this.retrace);
    }
});

module.exports = AppView;