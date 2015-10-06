var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var createHistory = require('history').createHistory;
var useBasename = require('history').useBasename;
var createHashHistory = require('history').createHashHistory;
var DefaultRoute = Router.DefaultRoute;
var auth = require('./auth');
var findDOMNode = require('react').findDOMNode;
var History = require('react-router').History;
var history = createHistory({queryKey: false});
var ProductData = require('./ProductData');
var shoppingItems = require('./components/FluxCartApp.react');
var FluxShoppingCart = require('./components/TemplateComp');
var ViewCart = require('./components/FluxCart.react');
var Logout = require('./components/TemplateComp').Logout;

ProductData.init();

var Login = React.createClass({
  mixins: [ History ],

  getInitialState() {
    return {
      error: false
    }
  },

  handleSubmit(event) {
    event.preventDefault()

    var email = findDOMNode(this.refs.email).value
    var pass = findDOMNode(this.refs.pass).value

    auth.login(email, pass, (loggedIn) => {
      if (!loggedIn)
        return this.setState({ error: true })

      var { location } = this.props

      if (location.state && location.state.nextPathname) {
        this.history.replaceState(null, location.state.nextPathname)
      } else {
        this.history.replaceState(null, '/about')
      }
    })
  },

  render() {
    return (
      <form className="form-inline" onSubmit={this.handleSubmit}>
      <div className="form-group">
    	<label className="sr-only" for="exampleInputEmail3">Email address</label>
    	<input ref="email" type="email" className="form-control" defaultValue="sathya@sapient.com" id="exampleInputEmail3" placeholder="Email"/>
  	  </div>
  	  <div className="form-group">
	    <label className="sr-only" for="exampleInputPassword3">Password</label>
	    <input ref="pass" type="password" className="form-control" id="exampleInputPassword3" placeholder="Password"/>
	  </div>
        
        <button type="submit" className="btn btn-default">login</button><br/><br/>
        {this.state.error && (
          <p>Bad login information</p>
        )}
      </form>
    )
  }
})

var About = React.createClass({
  render() {
    return <h1>This is About Page</h1>
  }
})

var Logout = React.createClass({
  componentDidMount() {
    auth.logout()
  },

  render() {
    return <p>You are now logged out</p>
  }
})

function requireAuth(nextState, replaceState) {
  if (!auth.loggedIn())
    replaceState({ nextPathname: nextState.location.pathname }, '/login')
}
	React.render((<Router history={history}>
			<Route path="/" component={FluxShoppingCart}>
		      <Route path="showcart" component={ViewCart} />
		      <Route path="about" component={About} />
		      <Route path="home" component={shoppingItems} onEnter={requireAuth} />
		      <Route path="login" component={Login} />
      		  <Route path="logout" component={Logout} />
		    </Route>			
		</Router>),document.getElementById('container'));

// React.render(
// 	<FluxShoppingCart />,
// 	document.getElementById('container')<IndexRoute component={FluxShoppingCart}/>

// );
// var Test = React.createClass({

//    render: function(){
// 		return (
// 				<div>
// 					<h1> Routing implemented </h1>
// 				</div>
// 		);
// 	},
    
    
// })

// var shoppingItems = React.createClass({

//    render: function(){
// 		return (
// 				<div>
// 					<h1> Shopping Bazaar </h1>
// 				</div>
// 		);
// 	},
    //<label><input ref="email" placeholder="email" defaultValue="sathya@sapient.com" /></label>
       // <label><input ref="pass" placeholder="password" /></label> (hint: password1)<br />
    
// })
// class About extends Component {
//   render() {
//     return <div>About</div>;
//   }
// }
//Router.run(routes,function(Handler){
//});