var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/FluxCartConstants');

var AppActions = {
    // Receive inital product data
    receiveProduct: function(data) {
        AppDispatcher.handleAction({
            typeOfAction: AppConstants.RECEIVE_DATA,
            data: data
        });
    },
	addItem: function(data){
		AppDispatcher.handleAction({
			typeOfAction: AppConstants.ADD_ITEM,
			data: data
		});
	},
	removeItem: function(data){
		AppDispatcher.handleAction({
			typeOfAction: AppConstants.REMOVE_ITEM,
			data: data
		})
	}
}

module.exports = AppActions;