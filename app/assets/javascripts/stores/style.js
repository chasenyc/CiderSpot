(function(root) {

  var CHANGE_EVENT = "CHANGE_EVENT";

  var _styles = [];

  var receiveStyles = function(styles) {
    _styles = styles;
  };

  var StyleStore = root.StyleStore = $.extend({}, EventEmitter.prototype, {

    all: function() {
      return _styles.slice();
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

    dispatcherId: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {
        case CiderConstants.STYLES_RECEIVED:
          receiveStyles(payload.styles);
          root.StyleStore.changed();
          break;
      }
    })
  });

})(this);
