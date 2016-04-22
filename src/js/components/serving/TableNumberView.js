var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

var TableNumberView = Backbone.View.extend({

    template: _.template(require('./templates/tableNumber.html')),

    render: function () {
        this.$el.html(this.template());
    }
});

module.exports = TableNumberView;