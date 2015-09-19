var React = require('react');
var FluxCart = require('./FluxCart.react');

var FluxCartActions = require('../actions/FluxCartActions');

// function getCartState() {
//   return {
//     cartItems: CartStore.getCartItems(),
//     products: CartAPI.getProductData().products
//   };
// }
var ViewCartApp = React.createClass({

    // Get initial state from stores
	// getInitialState: function(){
	// 	return getCartState();
	// },
    

    // Render our child components, passing state via props
	render: function(){
		return (
				<div>
					<FluxCart/>
				</div>
		);
	},
    
    // Method to setState based upon Store changes
    // _onChange: function() {
    //     this.setState(getCartState());
    // }
});

module.exports = ViewCartApp;