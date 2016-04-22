var Backbone = require('backbone');
var CustomerModel = require('./CustomerModel');

var CustomerCollection = Backbone.Collection.extend({
    model: CustomerModel,
    url: '/customers'
});

module.exports = CustomerCollection;