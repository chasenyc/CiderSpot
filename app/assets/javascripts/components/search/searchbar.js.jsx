var SearchBar = React.createClass({

  getInitialState: function () {
    return ({
      results: [],
      query: ""
    });
  },

  componentDidMount: function () {
    SearchResultsStore.addChangeHandler(this.resultsChanged);
  },

  componentWillUnmount: function () {
    SearchResultsStore.removeChangeHandler(this.resultsChanged);
  },

  handleChange: function (e) {
    e.preventDefault();
    this.setState({query: e.target.value});
    if (e.target.value.length < 1) {
      SearchApiUtil.search("");
    }
    SearchApiUtil.search(e.target.value);
  },

  resultsChanged: function () {
    this.setState({results: SearchResultsStore.results()});
  },

  render: function () {

    return (
      <div className="search-wrap">
        <div className="inner-search">
          <div className="search-bar">
            <input
              className="search-input"
              type="text"
              onChange={this.handleChange}
              value={this.state.query} />
            <SearchResultsIndex query={this.state.query} results={this.state.results} />
          </div>
        </div>
      </div>
    );
  }
});
