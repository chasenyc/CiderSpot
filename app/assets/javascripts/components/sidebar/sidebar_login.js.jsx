var SidebarLogin = React.createClass({

  render: function () {
    return(
      <div className="sidebar-user-info">
        <button
          className="sidebar-login"
          onClick={this.props.handleLogin}>Log In</button>
      </div>
    );
  }
});
