var CiderCreateForm = React.createClass({

  mixins: [ReactRouter.History, Analytics],

  getInitialState: function () {
    return ({
      name: '',
      description: '',
      brewery_id: "null",
      abv: '',
      organic: 'N',
      style_id: "null",
      imageFile: null,
      imageUrl: "",
      fileName: "none selected."
    });
  },

  componentDidMount: function () {
    BreweryUtil.fetchBreweries();
  },

  handleUploadClick: function () {
    document.getElementById("upfile").click();
  },

  showNewCider: function (cider) {
    var url = "ciders/" + cider.id;
    ga('send', {
      hitType: 'event',
      eventCategory: 'Create Cider',
      eventAction: 'Submit Successful',
      eventLabel: cider.name
    });
    this.history.pushState(null, url);
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var name = this.state.name;
    var description = this.state.description;
    var brewery_id = this.state.brewery_id;
    var abv = this.state.abv;
    var organic = this.state.organic;
    var style_id = this.state.style_id;
    var file = this.state.imageFile;

    var formData = new FormData();
    formData.append("cider[name]", name);
    formData.append("cider[description]", description);
    formData.append("cider[brewery_id]", brewery_id);
    formData.append("cider[abv]", abv);
    formData.append("cider[organic]", organic);
    formData.append("cider[style_id]", style_id);

    if (file !== null) {
      formData.append("cider[image]", file);
    }
    ga('send', {
      hitType: 'event',
      eventCategory: 'Create Cider',
      eventAction: 'Click Submit',
      eventLabel: name
    });
    ApiUtil.createCider(formData, this.showNewCider);
  },

  render: function () {
    return (
      <div className="cider-create-form">
        <form className="edit-form" onChange={this._onChange}>
          <h2>Add A Cider</h2>
          <div className="control-group group">
            <label>Cider Name:</label>
            <input className="edit" type="text" name="name"
                    value={this.state.name} />

          </div>
          <div className="control-group group">
            <label>Description:</label>
            <input className="edit" type="text" name="description"
                    value={this.state.description} />

          </div>
          <div className="control-group group">
            <label>Brewery:</label>
            {this._renderBrewerySelect()}
          </div>

          <div className="control-group group">
            <label>Style:</label>
            {this._renderStyleSelect()}
          </div>

          <div className="control-group group">
            <label title="Alcohol by Volume">ABV:</label>
            <input className="edit" type="text" name="abv"
                    value={this.state.abv} />
          </div>

          <div className="control-group group">
            <label>Organic:</label>
            <select
              className="edit create-cider"
              name="organic"
              value={this.state.organic}>
              <option value="Y">Yes</option>
              <option value="N">No</option>
            </select>
          </div>

          <div className="control-group group">
            <label>Cider photo:
            </label>
                <div
                  onClick={this.handleUploadClick}
                  className="upload-btn">Choose File</div>
                <input
                  id="upfile"
                  type="file"
                  className="upload edit"
                  name="imageFile" />
                <span>{this.state.fileName}</span>
          </div>

          <div className="control-group group">
            <label></label>
            <div className="form-info-notice">
              If you do not have an image, do not worry, a default image will be provided. If you have an issue with a cider sharing a name of a currently available cider please contact an administrator.
            </div>
          </div>
          <div className="edit-profile-bottom">
            <button
              onClick={this.handleSubmit}
              className="edit-profile-button active">Save Changes</button>
          </div>
        </form>
      </div>
    );
  },

  _renderBrewerySelect: function () {

    return (
      <select
        className="edit create-cider"
        name="brewery_id"
        value={this.state.brewery_id}
        onChange={this._onChange}
      >
        <option disabled value="null">Please select a brewery</option>
        {
          this.props.breweries.map(function(brewery) {
            return <option
              key={brewery.id} value={brewery.id}>{brewery.name}</option>
          })
        }
      </select>
    );
  },

  _renderStyleSelect: function () {

    return (
      <select
        className="edit create-cider"
        name="style_id"
        value={this.state.style_id}
        onChange={this._onChange}
      >
        <option disabled value="null">Please select a style</option>
        {
          this.props.styles.map(function(style) {
            return <option
              key={style.id} value={style.id}>{style.name}</option>
          })
        }
      </select>
    );
  },

  _onChange: function(e) {
    var obj = {};
    if (e.target.name === "imageFile") {
      var reader = new FileReader();
      var file = e.target.files[0];
      var that = this;
      var fileName = e.target.files[0].name;
      reader.onloadend = function() {
        that.setState({ fileName: fileName, imageUrl: reader.result, imageFile: file });
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
  }

});
