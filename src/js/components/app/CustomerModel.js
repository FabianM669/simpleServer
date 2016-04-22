var Backbone = require('backbone');

var CustomerModel = Backbone.Model.extend({
    defaults: {
        name: '',
        tableNumber: '',
        tableId: '',
        order: []
    },

    urlRoot: '/customers'
});

module.exports = CustomerModel;