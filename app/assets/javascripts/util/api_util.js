var ApiUtil = window.ApiUtil = {
  fetchCiders: function () {
    $.get('api/ciders', function (data) { ApiActions.receiveAllCiders(data); });
  },

  fetchCider: function (id) {
    $.get('api/ciders/' + id, function (data) { ApiActions.receiveCider(data); });
  },

  createReview: function (formData, id) {
    $.ajax({
      url: 'api/ciders/' + id + '/reviews',
      type: 'POST',
      processData: false,  // tell jQuery not to process the data
      contentType: false,   // tell jQuery not to set contentType
      data: formData,
      success: function (data) {
        ApiUtil.fetchCider(id);
      },
      error: function (error) {
        ApiActions.receiveError(error);
      }
    });
  },

  createGot: function (id) {
    $.ajax({
      url: 'api/ciders/' + id + '/gots',
      type: 'POST',
      success: function (data) {

      },
      error: function (error) {
        ApiActions.receiveError(error);
      }
    });
  },

  createWant: function (id) {
    $.ajax({
      url: 'api/ciders/' + id + '/wants',
      type: 'POST',
      success: function (data) {

      },
      error: function (error) {
        ApiActions.receiveError(error);
      }
    });
  },

  createLike: function (id) {
    $.ajax({
      url: 'api/reviews/' + id + '/likes',
      type: 'POST',
      success: function (data) {

      },
      error: function (error) {
        if (error.responseText === "[\"User has already been taken\"]") {
          error.responseText = "You can only like a review once";
        }
        ApiActions.receiveError(error);
      }
    });
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
