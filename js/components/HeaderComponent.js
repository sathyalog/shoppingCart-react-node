var React = require('react');
var HeaderComp = React.createClass({
	render: function(){
		return (
			
  			<div>
  			
			<header className="clearfix">
                
				
                <div className="login">
                    <a href="#">Login</a> | <a href="#">Signup</a>
                </div>

			</header>
			<div id="callout" class="bs-callout bs-callout-danger">Shopping Cart</div>
			</div>
			
		);
	}
});

module.exports = HeaderComp;