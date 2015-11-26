var GearTooltip = React.createClass({

  render: function () {

  return (
    <div className="tooltip-content">
      <div className="tooltip-inner top">
        <ul>
          <li>Edit Profile</li>
          <li>Your Cider Stash</li>
        </ul>
      </div>
      <div className="tooltip-inner bottom">
        <div className="tooltip-email">
          {this.props.currentUser.email}
        </div>
        <ul>
          <li>Log Out</li>
        </ul>
      </div>
    </div>
  );
  }
});
