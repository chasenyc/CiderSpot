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

  componentWillReceiveProps: function (newProps) {
    this.resetSearch();
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

  resetSearch: function () {
    this.setState({
      results: [],
      query: ""
    });
  },

  render: function () {

    return (
      <div className="search-wrap">
        <div data-refs="search" className="inner-search">
          <div data-refs="search" className="search-bar">
            <input
              data-refs="search"
              className="search-input"
              type="text"
              onChange={this.handleChange}
              placeholder="search our tens of ciders..."
              value={this.state.query} />
            <SearchResultsIndex
              query={this.state.query}
              results={this.state.results}
              resetSearch={this.resetSearch}
              toggleSearch={this.props.toggleSearch} />
          </div>
        </div>
      </div>
    );
  }
});
