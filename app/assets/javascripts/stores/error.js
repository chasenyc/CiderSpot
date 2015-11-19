(function (root) {
  var _errors = [];
  var CHANGE_EVENT = "change";
  var ErrorStore = root.ErrorStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _errors.slice(0);
    },

    addError: function (error) {
      this._wipeErrors();
      _errors.push(error);
    },

    _wipeErrors: function () {
      _errors = [];
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
        case CiderConstants.ERROR_RECEIVED:
          ErrorStore.addError(payload.error);
          ErrorStore.changed();
          break;
      }
    })

  });
})(this);
