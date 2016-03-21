var HomeView = Backbone.View.extend({

    template: _.template('<h1>Home!</h1>'),
    
    initialize: function () {
        this.insideOfView = new InsideOfView();
    },

    renderNested: function(view, selector) {
        var $element = (selector instanceof $) ? selector : this.$(selector);
        view.setElement($element).render();
    },
    render: function () {
        this.$el.html(this.template());
        this.renderNested(this.)
        // this.$el.append(this.insideOfView.render());
        // return this;
    }
});