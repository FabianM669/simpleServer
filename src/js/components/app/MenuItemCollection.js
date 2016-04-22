var Backbone = require('backbone');

var MenuItemCollection = Backbone.Collection.extend({
    url: '/menuItems'
});

module.exports = MenuItemCollection;