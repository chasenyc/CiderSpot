var SearchApiUtil = {
  search: function (query) {
    $.ajax({
      url: '/api/search',
      type: 'GET',
      dataType: 'json',
      data: {query: query},
      success: function (results) {
        SearchResultActions.receiveResults(results);
      }
    });
  },
};
