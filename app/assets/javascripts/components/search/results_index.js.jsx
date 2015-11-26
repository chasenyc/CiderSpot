var SearchResultsIndex = React.createClass({

  mixins: [ReactRouter.History],

  handleClick: function (e) {
    e.preventDefault();
    var path = e.currentTarget.dataset.path;
    this.props.resetSearch();
    this.props.toggleSearch();
    this.history.pushState(null, path);
  },

  render: function () {
    var fullResults;
    if (this.props.results.length > 0) {
      fullResults = (
        <li>See full results for "{this.props.query}"</li>
      );
    }

    return (
      <div className="small-search-results">
        <ul className="small-search-list">
          {
            this.props.results.map(function (result) {
              return <li
                key={"S"+result.id}
                data-path={"ciders/" + result.id}
                onClick={this.handleClick}>
                {this._beginning(result.name)}
                <b>{this._middle(result.name)}</b>
                {this._end(result.name)} - {this._beginning(result.brewery.name)}
                <b>{this._middle(result.brewery.name)}</b>
                {this._end(result.brewery.name)}

              </li>;
            }.bind(this))
          }
          {fullResults}
        </ul>
      </div>
    );
  },

  _highlightResult: function (string) {
    var lowerStr = string.toLowerCase();
    var lowerQry = this.props.query.toLowerCase();
    var start = lowerStr.indexOf(lowerQry);
    var end = start + this.props.query.length;
    var beforeStr = string.slice(0, start);
    var duringStr = string.slice(start, end);
    var afterStr = string.slice(end);
    var result;
    return result;
  },

  _beginning: function(string) {
    var lowerStr = string.toLowerCase();
    var lowerQry = this.props.query.toLowerCase();
    var start = lowerStr.indexOf(lowerQry);
    if (start === -1) {
      return string;
    }
    var end = start + this.props.query.length;
    var beforeStr = string.slice(0, start);
    return beforeStr;
  },

  _middle: function (string) {
    var lowerStr = string.toLowerCase();
    var lowerQry = this.props.query.toLowerCase();
    var start = lowerStr.indexOf(lowerQry);
    if (start === -1) { return; }
    var end = start + this.props.query.length;
    var duringStr = string.slice(start, end);
    return duringStr;
  },

  _end: function (string) {
    var lowerStr = string.toLowerCase();
    var lowerQry = this.props.query.toLowerCase();
    var start = lowerStr.indexOf(lowerQry);
    if (start === -1) { return; }
    var end = start + this.props.query.length;
    var afterStr = string.slice(end);
    return afterStr;
  }
});
