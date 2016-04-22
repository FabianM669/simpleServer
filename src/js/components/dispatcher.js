var _ = require('underscore');
var Backbone = require('backbone');

// As you can see, getting started with an event dispatcher is merely a case of using Underscore.js
// to create a copy of the Backbone.Events object, which contains all the methods that Backbone.js offers for its event handling
// It is this object which will act as a proxy in your app, so when an event is triggered on it, it
// will "broadcast" the event for any interested objects ("subscribers") to act upon.
var dispatcher = _.extend({}, Backbone.Events);

module.exports = dispatcher;