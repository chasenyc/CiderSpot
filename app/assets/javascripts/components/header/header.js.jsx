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
            <button
              className="user-info nav-item right button"
              onClick={this.props.toggleLogIn}>Log In</button>
          <button
            className="user-info nav-item right button"
            onClick={this.props.toggleSignUp}>Sign up</button>
          <button
            className="nav-item left button"
            onClick={this.props.toggleSidebar}>>></button>
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
          <button
            className="nav-item left button"
            onClick={this.props.toggleSidebar}>>></button>
          <a className="nav-item left button" href="#/">All Ciders</a>
        </header>
      );
    }
  }
});
