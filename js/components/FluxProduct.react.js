var React = require('react');
var FluxCartActions = require('../actions/FluxCartActions');


// Flux product view
var FluxProduct = React.createClass({

  // Render product View
  render: function() {
    var products = this.props.products.map(function (product) {
        return (
            <ProductList key={product.id} product={product} />
        );
    });
    return (
        <div id="page-content">
            <p>Happy Shopping..</p>
            
               <div> {products}</div>
            
        </div>
    );
  },

});
var ProductList = React.createClass({
	addToCart: function(e){
		FluxCartActions.addItem(this.props.product);
	},
	render: function(){
        var itemStyle = {
        borderBottom:'1px solid #ccc',
        paddingBottom:15
        };
		return (
			<div  className="productInfo clearfix col-sm-3" product={this.props.product} >
            <h4>{this.props.product.name}</h4>
            <img class="clearfix" src={this.props.product.image} alt="" />
            <div id="desc">{this.props.product.description}</div>
            <p>Price:${this.props.product.price} </p>
            <div className="btn-group btn-group-xs">
            <button type="button" className="btn btn-default btn-xs" onClick={this.addToCart}>Add To Cart</button>
            <p>{this.props.product.inventory} In Stock</p>
            </div>
          </div>
		);
	}
});
module.exports = FluxProduct;

