(function (root) {

  var _ciders = [];
  var CHANGE_EVENT = "change";
  var SINGLE_CHANGE = "single_change";

  var CiderStore = root.CiderStore =  $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _ciders.slice(0);
    },

    resetCiders: function (ciders) {
      _ciders = ciders;
    },

    addToCiders: function (ciders) {
      ciders.forEach(function (newCider) {
        var found = false;
        _ciders.forEach(function (oldCider) {
          if (newCider.id === oldCider.id) {
            oldCider = newCider;
            found = true;
          }
        });

        if (!found) {
          _ciders.push(newCider);
        }
      });
    },

    addCider: function (cider) {
      var idx = ApiUtil.findById(_ciders, cider.id);
      if (idx) {
        _ciders[idx] = cider;
      }
      else {
        _ciders.push(cider);
      }
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

    addSingleChangeListener: function (callback) {
      this.on(SINGLE_CHANGE, callback);
    },

    removeSingleChangeListener: function (callback) {
      this.removeListener(SINGLE_CHANGE, callback);
    },

    singleChanged: function (callback) {
      this.emit(SINGLE_CHANGE);
    },

    dispatcherID: AppDispatcher.register(function(payload){
      switch (payload.actionType) {
        case CiderConstants.CIDERS_RECEIVED:
          CiderStore.resetCiders(payload.ciders);
          CiderStore.changed();
          break;
        case CiderConstants.NEXT_CIDERS_RECEIVED:
          CiderStore.addToCiders(payload.ciders);
          CiderStore.changed();
          break;
        case CiderConstants.CIDER_RECEIVED:
          CiderStore.addCider(payload.cider);
          CiderStore.singleChanged();
          break;
      }
    })

  });
})(this);
