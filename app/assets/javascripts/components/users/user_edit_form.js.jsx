var UserEditForm = React.createClass({

  mixins: [ReactRouter.History],

  getInitialState: function () {
    return (
      $.extend({},
      CurrentUserStore.currentUser(),
      {
        imageFile: null,
        imageUrl: "",
        changed: false
      }
    ));
  },

  componentDidMount: function () {
    CurrentUserStore.addChangeHandler(this.changed);
  },

  componentWillReceiveProps: function (newProps) {
    this._ensureLoggedIn();
    this.setState(CurrentUserStore.currentUser());
    this.setState({changed: false});
  },

  handleSubmit: function (e) {
    e.preventDefault();
    if (!this.state.changed) { return; }
    var username = this.state.username;
    var birthdate = this.state.birthdate;
    var file = this.state.imageFile;

    var formData = new FormData();
    formData.append("user[username]", username);
    formData.append("user[birthdate]", birthdate);
    if (file !== null) {
      formData.append("user[image]", file);
    }

    UsersApiUtil.updateUser(formData, this.state.id);
  },

  handleChange: function (e) {
    var obj = {};
    this.setState({changed: true});
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

  changed: function () {
    this._ensureLoggedIn();
  },

  handleUploadClick: function () {
    document.getElementById("upfile").click();
  },

  render: function () {
    var klassName = "edit-profile-button";
    if (this.state.changed) {
      klassName += " active";
    }
    return (
      <div className="edit-profile-form">
        <form className="edit-form" onChange={this.handleChange} onSubmit={ this.handleSubmit }>
        <h2>Edit your profile</h2>
          <div className="control-group group">
            <label>Username:</label>
            <input className="edit" type="text" name="username"
                    value={this.state.username} />

          </div>

          <div className="control-group group">
            <label>Birthdate:
            </label>
              <input className="edit" type="date" name="birthdate"
                     value={this.state.birthdate} />
          </div>

          <div className="control-group group">
            <label>Profile photo:
            </label>
                <div
                  onClick={this.handleUploadClick}
                  className="upload-btn">Choose File</div>
                <input
                  id="upfile"
                  type="file"
                  className="upload edit"
                  name="imageFile" />
          </div>
          <div className="control-group group">
            <label></label>
            <div className="form-info-notice">
              At this time we are unable to change e-mail addresses.
              Please contact a CiderSpot administrator if necessary.
            </div>
          </div>
          <div className="edit-profile-bottom">
            <button
              onClick={this.handleSubmit}
              className={klassName}>Save Changes</button>
          </div>
        </form>
      </div>
    );
  },

  _ensureLoggedIn: function () {
    if (!CurrentUserStore.isLoggedIn()) {
      this.history.pushState(null, "/");
    }
  },
});

UserEditForm = integrateAnalytics(UserEditForm);
