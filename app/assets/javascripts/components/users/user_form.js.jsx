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

    render: function() {

      return (
        <div className="sign-up-form">
          <h1>Sign Up</h1>
          <form onSubmit={ this.submit }>
            <label>Username:
              <input type="text" name="user[username]" />
            </label>
            <label>Email:
              <input type="email" name="user[email]" />
            </label>
            <label>Password:
              <input type="password" name="user[password]" />
            </label>
            <label>Birthdate:
              <input type="date" name="user[birthdate]" />
            </label>
            <button>Join!</button>
          </form>
        </div>
      );
    },

  })
})(this);
