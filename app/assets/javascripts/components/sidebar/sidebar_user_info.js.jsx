var SidebarUserInfo = React.createClass({


  render: function () {

    return(
      <div className="sidebar-user-info">
        <div className="sidebar-bottom-email">
          <a href="#/editprofile">{this.props.currentUser.email}</a>
        </div>
        <div className="sidebar-bottom-links">
          <a className="sidebar-bottom-link link" href="#/editprofile">Edit Profile</a>
          <button className="sidebar-bottom-link">Log Out</button>
        </div>
      </div>
    );
  }
});
