var ApiActions = window.ApiActions = {
  receiveAllCiders: function(ciders){
    AppDispatcher.dispatch({
      actionType: CiderConstants.CIDERS_RECEIVED,
      ciders: ciders
    });
  },

  receiveNextCiders: function(ciders){
    AppDispatcher.dispatch({
      actionType: CiderConstants.NEXT_CIDERS_RECEIVED,
      ciders: ciders
    });
  },

  receiveCider: function(cider){
    AppDispatcher.dispatch({
      actionType: CiderConstants.CIDER_RECEIVED,
      cider: cider
    });
  },

  receiveError: function (error) {
    AppDispatcher.dispatch({
      actionType: CiderConstants.ERROR_RECEIVED,
      error: error
    });
  },

  receiveBreweries: function (breweries) {
    AppDispatcher.dispatch({
      actionType: CiderConstants.BREWERIES_RECEIVED,
      breweries: breweries
    });
  },

  receiveStyles: function(styles) {
    AppDispatcher.dispatch({
      actionType: CiderConstants.STYLES_RECEIVED,
      styles: styles
    });
  }
};
