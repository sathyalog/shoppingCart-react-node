var express = require('express');
var app  = express();
var port = 8080;
require('node-jsx').install({extension: '.js'});

var React = require('react');
var AppComponent = React.createFactory(require('./js/components/FluxCartApp.react.js'));

app.use('/static', express.static('static'));

app.set('view engine', 'ejs');

app.get('/', function(req, res, next){
    var component = AppComponent();
    var html = React.renderToString(component);
    res.render('index.ejs', {reactOutput: html});
});

app.listen(port, function(){
    console.log('Server running in port ' + port);
});
