var React = require('react');
var FooterComp = React.createClass({
	render: function(){
		return (
			<div>
			<div class="push"></div>
			<footer>
				<a href="#">Live Chat Help</a> | <a href="#">Return Order</a> <br />
                <span>Tesco &copy; 2015</span>
                
			</footer>
			</div>
		);
	}
});

module.exports = FooterComp;