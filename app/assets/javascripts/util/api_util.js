var ApiUtil = window.ApiUtil = {
  fetchCiders: function (pageNum, filter) {
    var page = pageNum || 1;
    $.get('api/ciders', {page: page, filter: filter}, function (data) { ApiActions.receiveAllCiders(data); });
  },

  fetchNextCiders: function (pageNum, filter, success, end) {
    var page = pageNum || 1;
    $.get('api/ciders', {page: page, filter: filter},
    function (data) {
      if (data.length === 0) {
        end && end();
      }
      ApiActions.receiveNextCiders(data);
      success && success();
    });
  },

  fetchCider: function (id, success) {
    $.get('api/ciders/' + id, function (data) {
      ApiActions.receiveCider(data);
      success && success();
    });
  },

  createReview: function (formData, id, success) {
    $.ajax({
      url: 'api/ciders/' + id + '/reviews',
      type: 'POST',
      processData: false,  // tell jQuery not to process the data
      contentType: false,   // tell jQuery not to set contentType
      data: formData,
      success: function (data) {
        ApiUtil.fetchCider(id);
        success && success();
      },
      error: function (error) {
        ApiActions.receiveError(error);
      }
    });
  },

  editReview: function (formData, id, ciderId, success) {
    $.ajax({
      url: 'api/reviews/' + id,
      type: 'PATCH',
      processData: false,  // tell jQuery not to process the data
      contentType: false,   // tell jQuery not to set contentType
      data: formData,
      success: function (data) {
        ApiUtil.fetchCider(ciderId);
        success && success();
      },
      error: function (error) {
        ApiActions.receiveError(error);
      }
    });
  },

  destroyReview: function (id, ciderId) {
    $.ajax({
      url: 'api/reviews/' + id,
      type: 'DELETE',
      success: function (data) {
        ApiUtil.fetchCider(ciderId);
      },
      error: function (error) {

      }
    });
  },

  createGot: function (id) {
    $.ajax({
      url: 'api/ciders/' + id + '/gots',
      type: 'POST',
      success: function (data) {
        SessionsApiUtil.fetchCurrentUser();
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
        SessionsApiUtil.fetchCurrentUser();
      },
      error: function (error) {
        ApiActions.receiveError(error);
      }
    });
  },

  destroyWant: function (id) {
    $.ajax({
      url: 'api/wants/' + id,
      type: 'DELETE',
      success: function (data) {
        SessionsApiUtil.fetchCurrentUser();
      },
      error: function (error) {
        ApiActions.receiveError(error);
      }
    });
  },

  destroyGot: function (id) {
    $.ajax({
      url: 'api/gots/' + id,
      type: 'DELETE',
      success: function (data) {
        SessionsApiUtil.fetchCurrentUser();
      },
      error: function (error) {
        ApiActions.receiveError(error);
      }
    });
  },

  createLike: function (id, ciderId, success) {
    $.ajax({
      url: 'api/reviews/' + id + '/likes',
      type: 'POST',
      success: function (data) {
        ApiUtil.fetchCider(ciderId, success(data));
        SessionsApiUtil.fetchCurrentUser();
      },
      error: function (error) {
        if (error.responseText === "[\"User has already been taken\"]") {
          error.responseText = "You can only like a review once";
        }
        ApiActions.receiveError(error);
      }
    });
  },

  destroyLike: function (id, ciderId, success) {
    $.ajax({
      url: 'api/likes/' + id ,
      type: 'DELETE',
      success: function (data) {
        ApiUtil.fetchCider(ciderId, success(data));
        SessionsApiUtil.fetchCurrentUser();
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

  fetchStyles: function() {
    $.ajax({
      url: 'api/styles',
      success: function(data) {
        ApiActions.receiveStyles(data);
      }
    });
  },

  createCider: function(formData, success) {
    $.ajax({
      url: 'api/ciders',
      type: 'POST',
      dataType: 'json',
      data: formData,
      processData: false,
      contentType: false,
      success: function (currentCider) {
        ApiActions.receiveCider(currentCider);
        success && success(currentCider);
      },
      error: function (error) {
        ApiActions.receiveError(error);
      }
    });
  }
};
