var Backbone = require('backbone');
var TableModel = require('./TableModel');

var TableCollection = Backbone.Collection.extend({

    model: TableModel,

    url: '/tables'

});

module.exports = TableCollection;