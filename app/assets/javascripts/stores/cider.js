(function (root) {

  var _ciders = [];
  var CHANGE_EVENT = "change";

  var CiderStore = root.CiderStore =  $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _ciders.slice(0);
    },

    resetCiders: function (ciders) {
      _ciders = ciders;
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
      if(payload.actionType === CiderConstants.CIDERS_RECEIVED){
        CiderStore.resetCiders(payload.ciders);
        CiderStore.changed();
      }
    })

  });
})(this);
