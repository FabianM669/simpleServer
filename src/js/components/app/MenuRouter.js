var Backbone = require('backbone');

var Router = require('./Router');
var dispatcher = require('../dispatcher.js');
var CategoryListView = require('../createMenu/CategoryListView');
var MenuItemListView = require('../createMenu/MenuItemListView');
var MenuItemFormView = require('../createMenu/MenuItemFormView');
var menuCollection = require('./MenuCollection');
var HomeView = require('../createMenu/HomeView');
var MenuItemCollection = require('./MenuItemCollection');
var MenuItemModel = require('./MenuItemModel');

function show (view) {
    dispatcher.trigger('show', view);
}

var MenuRouter = Router.extend({

    routes: {
        '': 'home',
        'categoryList': 'categoryList',
        'menuItemList': 'menuItemList',
        'menuItemList/:type': 'menuItemListType',
        'menuItemForm/:type': 'menuItemFormType',
        'editItem': 'toEditItem',
        '*default': 'default'
    },

    home: function () {
        show(new HomeView());
    },

    default: function () {

    },

    categoryList: function () {
        show(new CategoryListView({ collection: menuCollection }));
    },

    menuItemList: function () {
        show(new MenuItemListView());
    },

    menuItemListType: function (itemType) {
        var collection = new MenuItemCollection();

        // /menuItems/?type=itemType
        collection.fetch({
            data: {
                type: itemType
            }
        });

        show(new MenuItemListView({ type: itemType, collection: collection }));
    },

    menuItemFormType: function (itemType) {
        show(new MenuItemFormView({ type: itemType }));
    },

    toEditItem: function (itemName) {
        var model = new MenuItemModel();

        model.fetch({
            data: {
                name: itemName
            }
        });

        show(new MenuItemFormView({model: model}));
    }

});

module.exports = MenuRouter;