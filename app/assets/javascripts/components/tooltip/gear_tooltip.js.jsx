var GearTooltip = React.createClass({

  mixins: [ReactRouter.History],

  pushProfile: function () {
    this.history.pushState(null, "editprofile");
  },

  render: function () {
    var klassName = "tooltip-content";

    if (this.props.expanded) {
      klassName += " open";
    }

    return (
      <div ref="tooltip" className={klassName}>
        <div className="tooltip-inner top">
          <ul>
            <li onClick={this.pushProfile}>Edit Profile</li>
            <li onClick={this.props.toggleSidebar}>Your Cider Stash</li>
          </ul>
        </div>
        <div className="tooltip-inner bottom">
          <div className="tooltip-email">
            {this.props.currentUser.email}
          </div>
          <ul>
            <li onClick={this.props.handleLogOut}>Log Out</li>
          </ul>
        </div>
      </div>
    );
  }
});
