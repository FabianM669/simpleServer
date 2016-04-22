var Backbone = require('backbone');
var ServingMenuItemView = require('./ServingMenuItemView');
var dispatcher = require('../dispatcher');

var SelectMenuItemView = Backbone.View.extend({

    className: 'grid',

    initialize: function (options) {
        this.children = [];
        this.customer = options.customer;
    },

    render: function () {
        var _this = this;

        this.children.forEach(function (view) {
            view.remove();
        });

        this.children = this.collection.map(function (currentModel) {
            return new ServingMenuItemView({
                model: currentModel,
                customer: _this.customer
            });
        });

        this.children.forEach(function (view) {
            view.render();
            _this.$el.append(view.$el);
        });

        dispatcher.trigger('nav', [
            { title: 'Back', action: this.goBack.bind(this) }
        ]);
    },

    goBack: function () {
        window.location.hash = '/tables/' + this.customer.get('tableId') + '/order/' + this.customer.get('id');
    }
});

module.exports = SelectMenuItemView;