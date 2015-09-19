var React = require('react');
var Link = require('react-router-component').Link;




var CartSummary = React.createClass({
  
  render:function(){
    return (
      <div id="test">
        <Link href="/cart" className="btn btn-success">
          Cart Items
        </Link>
      </div>
    );
  }
});

module.exports = CartSummary;
