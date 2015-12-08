var CiderCreateForm = React.createClass({

  mixins: [ReactRouter.History, Analytics],

  getInitialState: function () {
    return ({
      name: '',
      description: '',
      brewery_id: 1,
    });
  },

  componentDidMount: function () {
    console.log("AHA");
  },

  render: function () {
    debugger;
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


          </div>
        </form>
      </div>
    );
  },

  _renderBrewerySelect: function () {


    return (
      <select
        className="edit"
        name="brewery_id"
        value={this.state.brewery_id}>
        {

        }
      </select>
    );
  }

});
