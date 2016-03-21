var InsideOfView = Backbone.View.extend({

    template: _.template('<h1>I am inside a View!!!</h1>'),

    render: function () {
        this.$el.html(this.template());
        return this;
    }
});