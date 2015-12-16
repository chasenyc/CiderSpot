(function(root) {
  root.SessionForm = React.createClass({
    mixins: [ReactRouter.History],

    submit: function (e) {
      e.preventDefault();
      ga('send', {
        hitType: 'event',
        eventCategory: 'Login',
        eventAction: 'attemptLogin',
        eventLabel: e.target.username.value
      });
      var credentials = $(e.currentTarget).serializeJSON();
      this.outsideClick();
      SessionsApiUtil.login(credentials, function () {

      }.bind(this));
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

    fillDemo: function (e) {
      e.preventDefault();
      ga('send', {
        hitType: 'event',
        eventCategory: 'Login',
        eventAction: 'fillDemo',
        eventLabel: 'Fill Demo Info'
      });
      e.target.parentElement.parentElement.username.value = "sennacy";
      e.target.parentElement.parentElement.password.value = "password";
      $("#login-btn")[0].click();
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
            <h1 className="user-form-header">Log In</h1>
            <input
              type="text"
              name="username"
              placeholder="username"/>
            <input type="password"
              name="password"
              placeholder="password"/>
            <div className="btn-holder">
              <button id="login-btn" className="btn large">Log In</button>
            </div>
            <div className="btn-holder">
              <button onClick={this.fillDemo} className="btn large">Demo Account</button>
            </div>
          </form>
        </div>
      );
    },

  })
})(this);
