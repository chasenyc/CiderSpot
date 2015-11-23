var Header = React.createClass({

  getInitialState: function () {
    return ({user: CurrentUserStore.currentUser()});
  },

  componentWillMount: function () {
    SessionsApiUtil.fetchCurrentUser();
  },

  componentDidMount: function () {
    CurrentUserStore.addChangeHandler(this.changed);
  },

  componentWillUnmount: function () {
    CurrentUserStore.removeChangeHandler(this.changed);
  },

  changed: function () {
    this.setState({user: CurrentUserStore.currentUser()});
  },

  handleLogOut: function () {
    SessionsApiUtil.logout();
  },

  render: function () {
    if (!CurrentUserStore.isLoggedIn()) {
      return (
        <header className="nav">
          <h1 className="logo"><a href="#/">Cider Spot</a></h1>
          <a className="user-info nav-item right button" href="#/login">Log in</a>
          <a className="user-info nav-item right button" href="#/signup">Sign up</a>
          <a className="nav-item left" href="#/">All Ciders</a>
        </header>
      );
    }
    else {
      return (
        <header className="nav">
          <h1 className="logo"><a href="#/">Cider Spot</a></h1>
          <div className="user-info nav-item right button">
            welcome, {this.state.user.username}!
          </div>
          <button onClick={this.handleLogOut}
                  className="user-info nav-item right button ">Log out
          </button>
          <a className="nav-item left button" href="#/">All Ciders</a>
        </header>
      );
    }
  }
});
