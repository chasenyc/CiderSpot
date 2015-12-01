var Header = React.createClass({

  mixins: [ReactRouter.History],

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
    $('#top').on("click", this.toggleSearch);
    CurrentUserStore.addChangeHandler(this.changed);
  },

  componentWillUnmount: function () {
    $('#top').off("click", this.toggleSearch);
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

  toggleSearch: function (e) {
    if (e.target.dataset.refs !== 'search') {
      this.props.removeSearch();
    }
  },

  render: function () {

    var rightArrow = (
      <div id="right-arrow" className="nav-icon user-info left right-arrow group">
        <img
          data-refs="right-arrow"
          onClick={this.props.toggleSidebar}
          className="icon"
          src={window.ImageAssets['right-arrow']}></img>
      </div>
    );
    var allCiders = (
      <a className="nav-item left button" href="#/">All Ciders</a>
    );

    var logo = (
      <h1 className="logo"><a href="#/">Cider Spot</a></h1>
    );

    var rightSide = (
      <span>
        <button
          className="user-info nav-item right button"
          onClick={this.props.toggleLogIn}>Log In</button>
        <button
          className="user-info nav-item right button"
          onClick={this.props.toggleSignUp}>Sign up</button>
      </span>
    );

    if (CurrentUserStore.isLoggedIn()) {
      rightSide = this._rightSideIcons();
    }

    return (
      <header className="nav">
        {logo}
        {rightSide}
        {rightArrow}
        {allCiders}
      </header>
    );
  },

  _rightSideIcons: function () {
    return (
      <span>
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
        <div
          id="search"
          data-refs="search"
          onClick={this.props.toggleSearch}
          className="nav-icon user-info right search group">
          <img
            data-refs="search"
            className="icon"
            src={window.ImageAssets['search']}></img>
          <span
            data-refs="search"
            className="search-description">
            Search our entire database
          </span>
        </div>
      </span>
    );
  }
});
