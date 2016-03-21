var BarView = Backbone.View.extend({

    className: 'Bar',

    events: {
        'click button': 'onRouteClick'
    },

    buttons: {
        // buttons is NOT a "built in" backbone thing
        // buttons will take a route as the key
        // and the name of the button as the value
        // the values are capitalized, well because they're
        // going to be the values on our buttons
        '': 'Home',
        'about': 'About',
        // This is me adding another button titled
        // New Stuff
        'newStuff': 'New Stuff'
    },

    initialize: function () {
        this.listenTo(Backbone.history, 'route', this.render);

    },

    render: function () {
        this.$el.empty();

        var children = [];
        var $el;

        // here we're iterating over an object:
        for (var prop in this.buttons) {
            $el = $('<button>');
            // !!!Should ask eric what the next line is doing exactly:
            if (prop === window.location.hash.substring(1)) {
                $el.addClass('is-active');
            }
        // this gives us the value of each prop
        // and sets the text content to the value
            $el.text(this.buttons[prop]);
        // if you pass a first param and not a second
        // param, it'll 'get', but if you do pass a second
        // param, it'll 'set', so we're setting here:
            $el.data('route', prop);
            children.push($el);
        }

        this.$el.append(children);
    },

    onRouteClick: function (e) {
        window.location.hash = $(e.target).data('route');
    }

});