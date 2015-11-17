var ApiUtil = window.ApiUtil = {
  fetchCiders: function () {
    $.get('api/ciders', function (data) { ApiActions.receiveAllCiders(data); });
  }
};
