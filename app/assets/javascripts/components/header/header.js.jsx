var Header = React.createClass({

  getInitialState: function () {
    return ({
      user: CurrentUserStore.currentUser(),
      toolExpanded: false
    });
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

  handleGearClick: function () {
    this.setState({toolExpanded: !this.state.toolExpanded});
    $(document).one("click", function(e) {
      if (e.target.dataset.refs !== 'gear')
        this.setState({toolExpanded: false});
    }.bind(this));
  },

  handleSearchClick: function () {
    this.props.toggleSearch();
    $(document).one("click", function(e) {
      if (e.target.dataset.refs !== 'search')
        this.props.removeSearch();
    }.bind(this));
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
          <a className="nav-item left button" href="#/">All Ciders</a>
        </header>
      );
    }
    else {
      return (
        <header className="nav">
          <h1 className="logo"><a href="#/">Cider Spot</a></h1>
          <div id="gear" className="nav-icon user-info right gear group">
            <img
              data-refs="gear"
              onClick={this.handleGearClick}
              className="icon"
              src={window.ImageAssets['gear']}></img>
            <GearTooltip
              expanded={this.state.toolExpanded}
              currentUser={this.state.user}
              toggleSidebar={this.props.toggleSidebar}
              handleLogOut={this.handleLogOut} />
          </div>
          <div id="search" className="nav-icon user-info right search group">
            <img
              data-refs="search"
              onClick={this.handleSearchClick}
              className="icon"
              src={window.ImageAssets['search']}></img>
          </div>
          <button
            className="nav-item left button"
            onClick={this.props.toggleSidebar}>>></button>
          <a className="nav-item left button" href="#/">All Ciders</a>
        </header>
      );
    }
  }
});
