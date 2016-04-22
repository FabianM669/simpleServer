var Backbone = require('backbone');
var _ = require('underscore');
var MenuItemModel = require('../app/MenuItemModel.js');
var $ = require('jquery');
var dispatcher = require('../dispatcher');

var MenuItemFormView = Backbone.View.extend({

    className: 'form',

    template: _.template(require('./templates/menuItemForm.html')),

    render: function () {
        this.$el.html(this.template());

        dispatcher.trigger('nav', [
            { title: 'Back', action: this.goBack.bind(this) },
            { title: 'Submit', action: this.submit.bind(this) }
        ]);
    },

    events: {
        'click .formBackButton': 'goBack'
    },

    initialize: function (options) {
        this.type = options.type;
        this.render();
    },

    submit: function () {
        this.model = new MenuItemModel();

        var numberOfChBox = $('.chkBoxes').length;
        var isChkdArray = [];

        for (var i = 0; i <= numberOfChBox; i++) {
            if ($('#chkBox' + i).is(':checked')) {
                isChkdArray.push($('#chkBox' + i).val());
            }
        }

        this.model.set({
            type: this.type,
            name: this.$el.find('.menuItemName').val(),
            description: this.$el.find('.description').val(),
            price: this.$el.find('.price').val(),
            options: isChkdArray
        });

        this.model.save();

        this.goBack();
    },

    goBack: function () {
        window.location.hash = '/menuItemList/' + this.type;
    }
});

module.exports = MenuItemFormView;