var CiderCreateForm = React.createClass({

  mixins: [ReactRouter.History, Analytics],

  getInitialState: function () {
    return ({
      name: '',
      description: '',
      brewery_id: "null",
      abv: '',
      organic: 'N'
    });
  },

  componentDidMount: function () {
    BreweryUtil.fetchBreweries();
  },

  render: function () {
    return (
      <div className="cider-create-form">
        <form
          className="edit-form">
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
        </form>
      </div>
    );
  },

  _renderBrewerySelect: function () {

    return (
      <select
        className="edit create-cider"
        name="brewery_id"
        value={this.state.brewery_id}>
        <option value="null">Please select a brewery</option>
        {
          this.props.breweries.map(function(brewery) {
            return <option
              key={brewery.id} value={brewery.id}>{brewery.name}</option>
          })
        }
      </select>
    );
  }

});
