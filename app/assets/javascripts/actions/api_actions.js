var ApiActions = window.ApiActions = {
  receiveAllCiders: function(ciders){
    AppDispatcher.dispatch({
      actionType: CiderConstants.CIDERS_RECEIVED,
      ciders: ciders
    });
  }
};
