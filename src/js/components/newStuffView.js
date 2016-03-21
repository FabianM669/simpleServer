var NewStuffView = Backbone.View.extend({

    template: _.template('<h1>New Stuff!</h1>'),

    render: function () {
        this.$el.html(this.template());
    }
});