var Backbone = require('backbone');

var MenuItemModel = Backbone.Model.extend({

    defaults: {
        type: '',
        name: '',
        description: '',
        price: '',
        options: []
    },

    url: '/menuItems'

});

module.exports = MenuItemModel;