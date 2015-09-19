var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/FluxCartConstants');
var _ = require('underscore');
if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}

// Define initial data points
var products = JSON.parse(localStorage.getItem('cart')) || {
//var _products = {
	items: [],
	cartItems: {},
	totalItems: 0
};

function addNewItem(payload){
    if(payload.data){
        var prodId = payload.data.id;
        if(!products.cartItems[prodId]){
            products.items.push(payload.data);
            products.cartItems[prodId] = {
                'count': 0
            }
        }
        
        var data = JSON.parse(localStorage.getItem('product'));
        data.products.forEach(function (i, j) {
            if(i.id === prodId) {
                if (i.inventory > 0) {
                    i.inventory -= 1;
                    products.cartItems[prodId]['count'] += 1;
                    products.totalItems += 1;
                }
            }
        });
        localStorage.setItem('product', JSON.stringify(data));
        localStorage.setItem('cart', JSON.stringify(products));
    }
}

function removeItem(payload){
    if(payload.data){
        var prodId = payload.data;
       
            if(products.cartItems[prodId]['count'] > 0){
                products.cartItems[prodId]['count'] -= 1;
                products.totalItems -= 1;
                var data = JSON.parse(localStorage.getItem('product'));
                data.products.forEach(function (i, j) {
                    if(i.id === prodId) {
                        i.inventory += 1;
                    }
                });
                localStorage.setItem('product', JSON.stringify(data));
                localStorage.setItem('cart', JSON.stringify(products));
            }
        
    }
}
// Extend Cart Store with EventEmitter to add eventing capabilities
var CartStore = _.extend({}, EventEmitter.prototype, {

  // Return cart items
  getCartItems: function() {
    return products;
  },

  // Emit Change event
  emitChange: function() {
    this.emit('change');
  },

  // Add change listener
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  // Remove change listener
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

// Register callback with AppDispatcher
AppDispatcher.register(function(payload) {
  switch(payload.actionType) {
        case AppConstants.ADD_ITEM:
            addNewItem(payload);
            break;
        case AppConstants.REMOVE_ITEM:
            removeItem(payload);
            break;
        default:
          return true;
    }

  // If action was responded to, emit change event
  CartStore.emitChange();

  return true;

});

module.exports = CartStore;
