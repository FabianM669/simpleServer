var AboutView = Backbone.View.extend({

    template: _.template('<h1>About!</h1>'),

    initialize: function (options) {
        options = options || {};
        this.message = options.message;
    },

    render: function () {
        this.$el.html(this.template());
        if (this.message) {
            this.$el.append(this.message);
        }
    }
});