var Backbone = require('backbone');
var _ = require('underscore');
var SingleCustomerView = require('./SingleCustomerView');
var dispatcher = require('../dispatcher');
var CustomerModel = require('../app/CustomerModel');

var CustomersGridView = Backbone.View.extend({

    className: 'customerGridView',

    template: _.template(require('./templates/customersGrid.html')),

    initialize: function (options) {
        this.tableId = options.tableId;
        this.children = [];
        this.listenTo(this.collection, 'add sync destroy', this.render);
    },

    render: function () {
        this.$el.html(this.template());

        var _this = this;

        this.children.forEach(function (view) {
            view.remove();
        });
        this.children = this.collection.map(function (currentModel) {
            return new SingleCustomerView({ model: currentModel });
        });

        this.children.forEach(function (view) {
            view.render();
            _this.$('.customerSlot').append(view.$el);
        });

        dispatcher.trigger('nav', [
            {
                title: 'Back',
                action: this.toTables.bind(this)
            },
            {
                title: 'New Customer',
                action: this.createCustomer.bind(this)
            }
        ]);
    },

    createCustomer: function () {
        this.collection.create({
            tableId: this.tableId
        });
    },

    toTables: function () {
        window.location.hash = '/tables';
    }
});

module.exports = CustomersGridView;

