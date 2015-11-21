var UserEditForm = React.createClass({

  getInitialState: function () {
    return (
      $.extend({},
      CurrentUserStore.currentUser(),
      {
        imageFile: null,
        imageUrl: ""
      }
    ));
  },

  componentWillReceiveProps: function (newProps) {
    this.setState(CurrentUserStore.currentUser());
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var email = this.state.email;
    var birthdate = this.state.birthdate;
    var file = this.state.imageFile;

    var formData = new FormData();
    formData.append("user[email]", email);
    formData.append("user[birthdate]", birthdate);
    formData.append("user[image]", file);

    UsersApiUtil.updateUser(formData, this.state.id);
  },

  handleChange: function (e) {
    var obj = {};
    if (e.target.name === "imageFile") {
      var reader = new FileReader();
      var file = e.target.files[0];
      var that = this;
      reader.onloadend = function() {
        that.setState({ imageUrl: reader.result, imageFile: file });
      }
      if (file) {
        reader.readAsDataURL(file);
      } else {
        this.setState({ imageUrl: "", imageFile: null });
      }
    } else {
      obj[e.target.name] = e.target.value;
      this.setState(obj);
    }
  },

  render: function () {
    return (
      <div className="edit-profile-form">
        <h1>Edit your profile</h1>
        <form onChange={this.handleChange} onSubmit={ this.handleSubmit }>
          <label>Email:
            <input type="email" name="email"
                   value={this.state.email} />
          </label>
          <label>Birthdate:
            <input type="date" name="birthdate"
                   value={this.state.birthdate} />
          </label>
          <label>Profile photo:
            <input type="file" name="imageFile" />
          </label>
          <button>Save Changes</button>
        </form>
      </div>
    );
  }
});
