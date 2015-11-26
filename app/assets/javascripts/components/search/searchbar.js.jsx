var SearchBar = React.createClass({


  render: function () {

    return (
      <div className="search-wrap">
        <div className="inner-search">
          <div className="search-bar">
            <input
              className="search-input"
              type="text"
              onChange={this.handleChange} />
          </div>
        </div>
      </div>
    );
  }
});
