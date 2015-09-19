var React = require('react');
var ProductData = require('./ProductData');
// var CartAPI = require('./utils/CartAPI');

var FluxShoppingCart = require('./components/FluxCartApp.react');

// Load Mock Product Data into localStorage
ProductData.init();

React.render(
	<FluxShoppingCart />,
	document.getElementById('container')
);
