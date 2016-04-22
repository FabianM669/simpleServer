var $ = require('jquery');
var Backbone = require('backbone');
var dispatcher = require('../dispatcher');

var NavView = Backbone.View.extend({

    className: 'nav',

    initialize: function () {
        this.listenTo(dispatcher, 'nav route:before', this.renderLinks);
    },

    renderLinks: function (links) {
        links = links || [];

        if (links.length) {
            this.$el.addClass('is-visible');
        } else {
            this.$el.removeClass('is-visible');
        }

        console.log(links);

        var buttons = links.map(function (link) {
            var action = link.action;

            var btn = $('<button>', {
                text: link.title
            });

            btn.on('click', action);

            return btn;
        });

        this.$el.html(buttons);
    }

});

module.exports = NavView;