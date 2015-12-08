var BreweryUtil = window.BreweryUtil = {
  fetchBreweries: function (success) {
    $.get('api/breweries', function (data) {
      ApiActions.receiveBreweries(data);
      success && success();
    });
  }
};
