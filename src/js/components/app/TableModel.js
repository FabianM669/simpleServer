var Backbone = require('backbone');

var TableModel = Backbone.Model.extend({

    defaults: {
        name: ''
    },

    urlRoot: '/tables'

});

module.exports = TableModel;