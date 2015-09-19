var Dispatcher = require('flux').Dispatcher;

// Create dispatcher instance
var AppDispatcher = new Dispatcher();

AppDispatcher.handleAction = function(action) {
	this.dispatch({
		actionType: action.typeOfAction,
		data: action.data
	});
}

module.exports = AppDispatcher;