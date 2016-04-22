var Backbone = require('backbone');
var _ = require('underscore');

var utility = require('../utility');

var SingleCustomerView = Backbone.View.extend({

    className: 'box',

    template: _.template(require('./templates/singleCustomerSquare.html')),

    events: {
        'click': 'toNewOrder',
        'blur .box-title': 'updateModel',
        'keyup .box-title': 'onKeyup'
    },

    render: function () {
        this.$el.html(this.template(this.model.attributes));
    },

    updateModel: function () {
        this.model.set('name', this.$('.box-title').text());
        this.model.save();
        this.render();
    },

    toNewOrder: function (e) {
        if (!this.model.get('name')) {
            this.$('.box-title').focus();
            utility.selectElementContents(this.$('.box-title')[0]);
            return;
        }

        window.location.hash = 'tables/' + this.model.get('tableId') + '/order/' + this.model.get('id');
    },

    onKeyup: function (e) {
        if (e.keyCode === 13) {
            this.updateModel();
        }
    }
});

module.exports = SingleCustomerView;