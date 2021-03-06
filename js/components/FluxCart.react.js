var React = require('react');
var FluxCartActions = require('../actions/FluxCartActions');
var FluxProduct = require('./FluxProduct.react');
var Modal = require('react-bootstrap').Modal;
var CartStore = require('../stores/CartStore');
var CartAPI = require('../utils/CartAPI');
function getCartState() {

  return {
    cartItems: CartStore.getCartItems(),
    products: CartAPI.getProductData().products,
  };
}
// Flux cart view
var FluxCart = React.createClass({
    getInitialState: function(){
          
        return getCartState();
    },
  // Render cart view
  render: function() {
    console.log(this.state);
    return (
        <div className="basket">
            
            <CartItemList products={this.state.products} cartItems={this.state.cartItems} />
        </div>
    );
  },

});

var CartItemList = React.createClass({
	render: function(){
		var selectedProducts = this.props.cartItems,
		    cartItems = this.props.cartItems,
		    productQty,
            totalCartItems = 0,
            itemsList;
        if (selectedProducts) {
            itemsList = selectedProducts.map(function(product, i){
                productQty = cartItems.cartItems[product.id].count;
                totalCartItems += productQty;
                if (productQty > 0) {
                    return (
                        <ProductCart product={product} productQty={productQty} key={i}/>
                    )
                }
            });
        } else {
            itemsList = "no items";
        }
		return (
			<div className="basket-list">
            <button type="button" className="btn btn-default btn-sm">Cart&nbsp;&nbsp;<span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span><span className="badge">{totalCartItems}</span></button>
			    <br/>
                <table className="table table-hover"><thead>
                <tr>
                <th className="col-md-3"></th>
                <th className="col-md-3">Product Name</th>
                <th className="col-md-3">Quantity</th>
                <th className="col-md-3">Action</th>
                </tr>
                </thead>
                </table>
			     {totalCartItems > 0 ? <ul>{itemsList}</ul> : null}
			</div>
		);
	}
});

var ProductCart = React.createClass({
	deductQty: function(e){
		FluxCartActions.removeItem(this.props.product.id);
	},
	render: function(){
		return (
    		<div>

        <table className="table table-hover">
            
            <tbody>
            <tr>
            <td className="col-md-3"><img className="smallimg" src={host+this.props.product.image}/></td>
            <td className="col-md-3">{this.props.product.name}</td>
            <td className="col-md-3">{this.props.productQty}</td>
            <td className="col-md-3"><button className="btn btn-default btn-xs" onClick={this.deductQty} idVal={this.props.product.id}>Remove</button></td>
            </tr> 
            </tbody>
            
          </table>
          
        </div>


		);
	}
});



module.exports = FluxCart;

