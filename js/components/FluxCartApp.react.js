var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var FluxProduct = require('./FluxProduct.react');
var FluxCart = require('./FluxCart.react');
var Cart = require('./viewCart');
var CartSummary = require('./app-cartsummary');
var ProductStore = require('../stores/ProductStore');
var CartStore = require('../stores/CartStore');
var CartAPI = require('../utils/CartAPI');
var Link = Router.Link;


// Method to retrieve state from Stores
function getCartState() {
  return {
    cartItems: CartStore.getCartItems(),
    products: CartAPI.getProductData().products,

  };
}
var ShoppingCartApp = React.createClass({
   
	getInitialState: function(){
		return getCartState();       
	},

    
    componentDidMount: function() {
        ProductStore.addChangeListener(this._onChange);
        CartStore.addChangeListener(this._onChange);
    },

    // Remove change listeners from stores
    componentWillUnmount: function() {
        ProductStore.removeChangeListener(this._onChange);
        CartStore.removeChangeListener(this._onChange);
    },

    // Render our child components, passing state via props
	render: function(){
       
		return (
			<div id="page-main">
				<FluxProduct products={this.state.products} />
                
			</div>
		);
	},
    
    // Method to setState based upon Store changes
    _onChange: function() {
        this.setState(getCartState());
    }
});

module.exports = ShoppingCartApp;