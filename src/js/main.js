var $ = require('jquery');
var Backbone = require('backbone');
var AppView = require('./components/App/AppView');
var MenuRouter = require('./components/App/MenuRouter');
var ServingRouter = require('./components/App/ServingRouter');

var menuRouter = new MenuRouter();
var servingRouter = new ServingRouter();
var appView = new AppView();

appView.render();

Backbone.history.start();

$('#entryPoint').append(appView.$el);

// var $window = $(window);
// var screenWidth = window.screen.width;

// $(window).on('resize', scale);

// function scale () {
//     var widthRatio = $window.width() / screenWidth;
//     $('#toCategoryListView, #toTablesGridView')
//         .css('transform', 'scale(' + widthRatio + ')');
// }

// scale();