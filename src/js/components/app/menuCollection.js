var Backbone = require('backbone');
var MenuItemModel = require('./MenuItemModel.js');

var MenuItemCollection = Backbone.Collection.extend({

    model: MenuItemModel

});

module.exports = new MenuItemCollection([
    { type: 'Apps', description: 'Appetizers, starters, and tapas.' },
    { type: 'Bevs', description: 'Non-alcoholic beverages.' },
    { type: 'Entrees', description: 'Main courses.' },
    { type: 'Alcohol', description: 'From the bar.' },
    { type: 'Dessert', description: 'Something sweet.' },
    { type: 'Misc', description: 'Everything else.' }
]);