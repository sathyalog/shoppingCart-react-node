var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Template = require('./FluxCartApp.react');
var HeaderComponent = require('./HeaderComponent');
var FooterComponent = require('./FooterComponent');
var createHistory = require('history').createHistory;
var useBasename = require('history').useBasename;
var Link = Router.Link;
var auth = require('./../auth');
var findDOMNode = require('react').findDOMNode;
var History = require('react-router').History;
var TemplateComp = React.createClass({
  getInitialState() {
    return {
      loggedIn: auth.loggedIn()
    }
  },
  
  updateAuth(loggedIn) {
    this.setState({
      loggedIn: loggedIn
    })
  },

  componentWillMount() {
    auth.onChange = this.updateAuth
    auth.login()
  },
  render:function(){
    return (<div>
      <HeaderComponent />
       <Link to="/home"><button type="button" className="btn btn-default btn-sm">Home</button></Link>
       <Link to="/about"><button type="button" className="btn btn-default btn-sm">About</button></Link>
       <Link to="/showcart"><button type="button" className="btn btn-default btn-sm">Cart</button></Link><br/>
       
       <div>
        <ul>
          <li>
            {this.state.loggedIn ? (
              <div><Link to="/logout"><button type="button" className="btn btn-primary btn-sm right">Log out</button></Link><br/></div>
            ) : (   ''    )}
          </li>
        </ul>
        <img src="./../../banner1.jpg" height="200px" width="1050px"/><br/><br/>
      </div>
      {this.props.children }  
      {this.state.loggedIn ? ('') : (<div><p className="text-justify"><strong>You are not <em>logged </em>in. Please login.</strong></p></div>) }  
      <FooterComponent/> 

      </div>
    );
  }
});




module.exports = TemplateComp;


