var Router = require('./Router');
var dispatcher = require('../dispatcher.js');
var TablesGridView = require('../serving/TablesGridView');
var menuCollection = require('../app/menuCollection');
var MenuItemCollection = require('./MenuItemCollection');
var SelectMenuItemView = require('../serving/SelectMenuItemView');
var TableCollection = require('./TableCollection');
var CustomersGridView = require('../serving/CustomersGridView');
var NewOrderView = require('../serving/NewOrderView');
var CustomerCollection = require('./CustomerCollection');
var CustomerModel = require('./CustomerModel');

function show (view) {
    dispatcher.trigger('show', view);
}

// /order/:customerId/
// This route will render a view that displays categories
// /order/:customerId/:category
// This route will render a view that displays menu items
// at a specific category and will update the users order
// on the server via a PUT request

var ServingRouter = Router.extend({

    routes: {
        'tables': 'tables',
        'tables/:tableId': 'customers',
        'tables/:tableId/order/:customerId': 'order',
        'tables/:tableId/order/:customerId/:category': 'orderCategory'
    },

    tables: function () {
        var collection = new TableCollection();

        collection.fetch();

        show(new TablesGridView({ collection: collection }));
    },

    customers: function (tableId) {
        var collection = new CustomerCollection();

        collection.fetch({
            data: {
                tableId: tableId
            }
        });

        show(new CustomersGridView({
            tableId: tableId,
            collection: collection
        }));
    },

    order: function (tableId, customerId) {
        var customer = new CustomerModel({ id: customerId });

        customer.fetch({
            success: function () {
                show(new NewOrderView({
                    collection: menuCollection,
                    model: customer
                }));
            }
        });
    },

    orderCategory: function (tableId, customerId, itemType) {
        var customer = new CustomerModel({ id: customerId });
        var collection = new MenuItemCollection();

        collection.fetch({
            data: {
                type: itemType
            }
        });

        customer.fetch({
            success: function () {
                show(new SelectMenuItemView({
                    collection: collection,
                    customer: customer
                }));
            }
        });
    }
});

module.exports = ServingRouter;