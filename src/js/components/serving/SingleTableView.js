var Backbone = require('backbone');
var _ = require('underscore');

var utility = require('../utility');

var SingleTableView = Backbone.View.extend({

    className: 'box',

    events: {
        'click': 'toCustomersGrid',
        'blur .box-title': 'updateModel',
        'keyup .box-title': 'onKeyup'
    },

    template: _.template(require('./templates/singleTable.html')),

    render: function () {
        this.$el.html(this.template(this.model.attributes));
    },

    updateModel: function () {
        this.model.set('name', this.$('.box-title').text());
        this.model.save();
        this.render();
    },

    toCustomersGrid: function (e) {
        if (!this.model.get('name')) {
            utility.selectElementContents(this.$('.box-title')[0]);
            this.$('.box-title').focus();
            return;
        }

        window.location.hash = '/tables/' + this.model.get('id');
    },

    onKeyup: function (e) {
        if (e.keyCode === 13) {
            this.updateModel();
        }
    }
});

module.exports = SingleTableView;