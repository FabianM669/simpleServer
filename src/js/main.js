// Creating a new router instance:
var router = new AppRouter();
// After you initizalize your Routers, you need
// to execute Backbone.history.start();
var app = _.extend({}, Backbone.Events);
var barView = new BarView();
var appView = new AppView({ barView: barView});

appView.render();

$('#app').append(appView.$el);  

Backbone.history.start();

