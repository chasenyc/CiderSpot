(function(root) {
  root.SessionForm = React.createClass({
    mixins: [ReactRouter.History],

    submit: function (e) {
      e.preventDefault();
      var credentials = $(e.currentTarget).serializeJSON();
      SessionsApiUtil.login(credentials, function () {
        this.history.pushState({location: this.props.location}, "/");
      }.bind(this));
    },

    componentWillMount: function () {
      if (CurrentUserStore.isLoggedIn()) {
        this.history.pushState(null, "/");
      }
    },

    render: function() {

      return (
        <div className="log-in-form">
          <h1>Login</h1>
          <form onSubmit={ this.submit }>


            <label>
              Username
              <input type="text" name="username" />
            </label>

            <label>
              Password
              <input type="password" name="password" />
            </label>

            <button>Log In!</button>
          </form>
        </div>
      );
    },

  })
})(this);
