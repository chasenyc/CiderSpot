(function (root) {

  var _breweries = [];
  var CHANGE_EVENT = "breweries_change";

  var BreweryStore = root.BreweryStore =  $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _breweries.slice(0);
    },

    resetBreweries: function (breweries) {
      _breweries = breweries;
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    changed: function (callback) {
      this.emit(CHANGE_EVENT);
    },

    dispatcherID: AppDispatcher.register(function(payload){
      switch (payload.actionType) {
        case CiderConstants.BREWERIES_RECEIVED:
          BreweryStore.resetBreweries(payload.breweries);
          BreweryStore.changed();
          break;
      }
    })

  });
})(this);
