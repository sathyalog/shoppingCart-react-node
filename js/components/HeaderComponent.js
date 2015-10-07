var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var HeaderComp = React.createClass({
	render: function(){
		return (
			
  			<div>
  			
			<header className="clearfix">
                
				
                <div className="login">
                    <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link>
                </div>

			</header>
			<div id="callout" class="bs-callout bs-callout-danger">Shopping Cart</div>
			</div>
			
		);
	}
});

module.exports = HeaderComp;