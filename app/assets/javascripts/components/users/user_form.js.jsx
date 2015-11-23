(function(root) {
  root.UserForm = React.createClass({
    mixins: [ReactRouter.History],

    submit: function (e) {
      e.preventDefault();
      var formData = $(e.currentTarget).serializeJSON();
      UsersApiUtil.createUser(formData, function () {
        this.history.pushState(null, "/");
      }.bind(this));;
    },

    componentWillMount: function () {
      if (CurrentUserStore.isLoggedIn()) {
        this.history.pushState(null, "/");
      }
    },

    formClick: function (e) {
      e.stopPropagation();
    },

    outsideClick: function (e) {
      this.props.toggleSignUp();
    },

    render: function() {

      return (
        <div>
          <div
            onClick={this.outsideClick}
            className="modal-screen"></div>
          <form
            onClick={this.formClick}
            className="sign-up-form"
            onSubmit={ this.submit }>
            <div
              onClick={this.outsideClick}
              className="modal-close"></div>
            <h1 className="user-form-header">Create An Account</h1>
            <input
              type="text"
              name="user[username]"
              placeholder="username"/>
            <input
              type="email"
              name="user[email]"
              placeholder="email"/>
            <input type="password"
              name="user[password]"
              placeholder="password"/>
            <label>Birthdate:
            </label>
            <input type="date"
              name="user[birthdate]"
              placeholder="birthdate"/>
            <div className="btn-holder">
              <button className="btn large">Join!</button>
            </div>
          </form>
        </div>
      );
    },

  })
})(this);
