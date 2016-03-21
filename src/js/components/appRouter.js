var data = new Backbone.Collection([
    { id: 1, name: 'Fabian' },
    { id: 2, name: 'Eric' },
    { id: 3, name: 'Addie' },
    { id: 4, name: 'Drew' }
]);

// Creating a new Router consructor function:

var AppRouter =  Backbone.Router.extend({

    routes: {
// Don't prefix your route paths with leading slashes!
// Meaning, your route, should be an empty string!

        '': 'home',
        // home: 'home',
        'about': 'about',
        'about/:id': 'aboutSpecial',
        'newStuff': 'newStuff'
    },

    home: function () {
        app.trigger('show', new HomeView());
    },

    about: function () {
        app.trigger('show', new AboutView());
    },

    newStuff: function () {
        app.trigger('show', new NewStuffView());
    },

    // insideOfView: function () {
    //     app.trigger('show', new InsideOfView());
    // },

    aboutSpecial: function (id) {
        id = parseInt(id);
        var user = data.findWhere({ id: id });
        console.log(user);
        if (user) {
            app.trigger('show', new AboutView({ message: user.get('name') }));
        } else {
            app.trigger('show', new AboutView({ message: 'There was no user with that id!' }));
        }
    }
});


// this is another way of doing things:

// router.navigate('home', { trigger: true });

