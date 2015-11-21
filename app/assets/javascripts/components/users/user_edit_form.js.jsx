var UserEditForm = React.createClass({

  getInitialState: function () {
    return (CurrentUserStore.currentUser());
  },

  componentWillReceiveProps: function (newProps) {
    this.setState(CurrentUserStore.currentUser());
  },

  handleSubmit: function () {
    e.preventDefault();
  },

  handleChange: function (e) {
    var obj = {};
    obj[e.target.name] = e.target.value;
    this.setState(obj);
  },

  render: function () {
    return (
      <div className="edit-profile-form">
        <h1>Edit your profile</h1>
        <form onChange={this.handleChange} onSubmit={ this.handleSubmit }>
          <label>Username:
            <input type="text"
                   name="username"
                   value={this.state.username} />
          </label>
          <label>Email:
            <input type="email" name="email"
                   value={this.state.email} />
          </label>
          <label>Password:
            <input type="password" name="password" />
          </label>
          <label>Birthdate:
            <input type="date" name="birthdate"
                   value={this.state.birthdate} />
          </label>
          <label>Profile photo:
            <input type="file" name="image" />
          </label>
          <button>Save Changes</button>
        </form>
      </div>
    );
  }
});
