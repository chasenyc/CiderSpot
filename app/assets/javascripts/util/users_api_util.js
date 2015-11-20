var UsersApiUtil = {

  createUser: function (formData, success) {
    $.ajax({
      url: 'api/users',
      type: 'POST',
      dataType: 'json',
      data: formData,
      success: function (currentUser) {
        CurrentUserActions.receiveCurrentUser(currentUser);
        success && success();
      },
      error: function (error) {
        ApiActions.receiveError(error);
      }
    });
  }

};
