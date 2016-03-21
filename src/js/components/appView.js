var AppView = Backbone.View.extend({

    className: 'App',
    template: _.template($('#app-template').html()),

    initialize: function (options) {
        var _this = this;
        this.barView = options.barView;
        this.listenTo(app, 'show', this.show);
    },

    show: function (view) {
        // console.log(view);
        // handle the (optional) sub-view
        if (view) {
            this.$('.page-slot').empty();
            view.render();
            this.$('.page-slot').append(view.$el);
        }
    },

    render: function (view) {
        // Inject the Template
        this.$el.html(this.template());
        this.barView.render();
        this.$('.bar-slot').append(this.barView.$el);
        // Handle the (optional) sub-view  
    }
});