var ApiUtil = window.ApiUtil = {
  fetchCiders: function () {
    $.get('api/ciders', function (data) { ApiActions.receiveAllCiders(data); });
  },

  fetchCider: function (id) {
    $.get('api/ciders/' + id, function (data) { ApiActions.receiveCider(data); });
  },

  findById: function (array, id) {
    var result;
    array.forEach(function(el) {
      if (parseInt(id) === parseInt(el.id)) {
        result = array.indexOf(el);
      }
    });
    return result;
  },
};
