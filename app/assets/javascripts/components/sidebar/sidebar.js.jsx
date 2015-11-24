var Sidebar = React.createClass({

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

  render: function () {
    var klassName = "";
    if (this.state.expanded) { klassName += "open"; }

    if (!CurrentUserStore.isLoggedIn()) {
      return (
        <div id="sidebar" className={klassName}>
          <div className="sidebar-inner">
            <h2 className="sidebar-header">Please log in</h2>
          </div>
        </div>
      );
    }
    return (
      <div id="sidebar" className={klassName}>
        <div className="sidebar-inner">
          <h2 className="sidebar-header">Your Ciders</h2>
          <ul className="wantgot-list">
            <li className="sidebar-list wants group">
              <div className="sidebar-list-left">
                Wants
              </div>
              <div className="sidebar-list-right">
                {this.state.currentUser.wants.length}
              </div>
            </li>

            <li className="sidebar-list gots group">
              <div className="sidebar-list-left">
                Gots
              </div>
              <div className="sidebar-list-right">
                {this.state.currentUser.gots.length}
              </div>
            </li>

            <li className="sidebar-list reviews group">
              <div className="sidebar-list-left">
                Reviews
              </div>
              <div className="sidebar-list-right">
                {this.state.currentUser.reviews.length}
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});
