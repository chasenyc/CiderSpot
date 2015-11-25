var Sidebar = React.createClass({

  mixins: [ReactRouter.History],

  getInitialState: function () {
    return ({
      expanded: this.props.expanded,
      currentUser: this.props.currentUser
    });
  },

  componentWillReceiveProps: function (newProps) {
    this.setState({
      expanded: newProps.expanded,
      currentUser: newProps.currentUser
    });
  },

  pushWants: function() {
    this.history.pushState(null, "wants");
  },

  pushGots: function() {
    this.history.pushState(null, "gots");
  },

  pushReviewed: function() {
    this.history.pushState(null, "reviewed");
  },

  render: function () {
    var klassName = "";
    if (this.state.expanded) { klassName += "open"; }

    if (!CurrentUserStore.isLoggedIn()) {
      return (
        <div id="sidebar" className={klassName}>
          <div className="sidebar-inner">
            <div className="sidebar-top-not-logged">
              <h2 className="sidebar-header">Welcome to Cider Spot</h2>
              <div className="sidebar-body">
              This is your Cider Stash where you can keep track of ciders
              you've had, want to have and have reviewed.
              </div>
            </div>
          </div>
          <div className="sidebar-bottom">
            <SidebarLogin handleLogin={this.props.toggleLogIn} />
          </div>
        </div>
      );
    }
    return (
      <div id="sidebar" className={klassName}>
        <div className="sidebar-top">
          <div className="sidebar-inner">
            <h2 className="sidebar-header">Your Ciders</h2>
            <ul className="wantgot-list">
              <li className="sidebar-list wants group"
                  onClick={this.pushWants}>
                  <div className="sidebar-list-left">
                    Wants
                  </div>
                  <div className="sidebar-list-right">
                    {this.state.currentUser.wants.length}
                  </div>
              </li>

              <li className="sidebar-list gots group"
                  onClick={this.pushGots}>
                  <div className="sidebar-list-left">
                    Gots
                  </div>
                  <div className="sidebar-list-right">
                    {this.state.currentUser.gots.length}
                  </div>
              </li>

              <li className="sidebar-list reviews group"
                  onClick={this.pushReviewed}>
                <div className="sidebar-list-left">
                  Reviewed
                </div>
                <div className="sidebar-list-right">
                  {this.state.currentUser.reviewed.length}
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="sidebar-bottom">
          <SidebarUserInfo currentUser={this.state.currentUser} />
        </div>
      </div>
    );
  }
});
