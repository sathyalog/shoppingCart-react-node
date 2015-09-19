var React = require('react');
var HeaderComponent = require('./HeaderComponent');
var FooterComponent = require('./FooterComponent');
var FluxProduct = require('./FluxProduct.react');
var FluxCart = require('./FluxCart.react');
var Cart = require('./viewCart');
var CartSummary = require('./app-cartsummary');
var ProductStore = require('../stores/ProductStore');
var CartStore = require('../stores/CartStore');
var CartAPI = require('../utils/CartAPI');
var Router = require('react-router-component');
var Locations = Router.Locations;
var Location  = Router.Location;



// Method to retrieve state from Stores
function getCartState() {
  return {
    cartItems: CartStore.getCartItems(),
    products: CartAPI.getProductData().products
  };
}
var ShoppingCartApp = React.createClass({

    // Get initial state from stores
	getInitialState: function(){
		return getCartState();
	},
    
    // Add change listeners to stores
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
				<HeaderComponent />
                <FluxProduct products={this.state.products} />
                <FluxCart products={this.state.cartItems} />
               
				<FooterComponent/>
                
			</div>
		);
	},
    
    // Method to setState based upon Store changes
    _onChange: function() {
        this.setState(getCartState());
    }
});

module.exports = ShoppingCartApp;

/*
// <CartSummary/>
<Locations>
                  <Location path="/cart" handler={Cart} /> 
                  <Location path="/" handler={FooterComponent} />
                  
                </Locations>
*/