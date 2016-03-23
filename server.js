var express = require('express');
// making an instance of express
var app = express();
// express.static will take a path to the files 
// we want to serve publicly
app.use(express.static(__dirname + '/public'));

app.listen(8000);