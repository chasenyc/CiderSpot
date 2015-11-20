var UserEditForm = React.createClass({

  getInitialState: function () {
    return ({currentUser: CurrentUserStore.currentUser()});
  },

  componentWillReceiveProps: function (newProps) {
    this.setState({currentUser: CurrentUserStore.currentUser()});
  },

  handleSubmit: function () {

  },

  render: function () {
    console.log(this.state.currentUser.username)
    return (
      <div className="edit-profile-form">
        <h1>Edit your profile</h1>
        <form onSubmit={ this.handleSubmit }>
          <label>Username:
            <input type="text"
                   name="user[username]"
                   defaultValue={this.state.currentUser.username} />
          </label>
          <label>Email:
            <input type="email" name="user[email]"
                   defaultValue={this.state.currentUser.email} />
          </label>
          <label>Password:
            <input type="password" name="user[password]" />
          </label>
          <label>Birthdate:
            <input type="date" name="user[birthdate]"
                   defaultValue={this.state.currentUser.birthdate} />
          </label>
          <label>Profile photo:
            <input type="file" name="user[image]" />
          </label>
          <button>Save Changes</button>
        </form>
      </div>
    );
  }
});
