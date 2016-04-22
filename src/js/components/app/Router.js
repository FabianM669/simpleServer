var Backbone = require('backbone');

var dispatcher = require('../dispatcher');

module.exports = Backbone.Router.extend({

    execute: function (callback, args) {
        dispatcher.trigger('route:before');

        if (callback) callback.apply(this, args);
    }

});