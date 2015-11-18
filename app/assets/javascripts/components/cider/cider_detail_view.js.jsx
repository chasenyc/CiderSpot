var CiderDetailView = React.createClass({

  getInitialState: function () {
    var ciderId = this.props.params.ciderId;
    var cider = this._findCiderById(ciderId) || {} ;
    return { cider: cider };
  },

  componentDidMount: function () {
    CiderStore.addSingleChangeListener(this.changed);
    ApiUtil.fetchCider(this.props.params.ciderId);
  },

  changed: function () {
    var ciderId = this.props.params.ciderId;
    var cider = this._findCiderById(ciderId) || {} ;
    this.setState({cider: cider});
  },

  _findCiderById: function (ciderId) {
    var result;
    CiderStore.all().forEach(function(cider) {
      if (parseInt(ciderId) === cider.id) {
        result = cider;
      }
    });
    return result;
  },

  render: function () {
    var breweryName;
    if (this.state.cider.brewery === undefined) { return <div></div>; }
    return (
      <div className="cider-detail">
        <article>
          <img className="cider-thumb" src={this.state.cider.image_url}></img>
          <h1 className="Name">{this.state.cider.name}</h1>
          <div className="cider-subhead">
            <h2 className="brewery-subhead">{this.state.cider.brewery.name}</h2>
            <h3 className="style-subhead">Style: {this.state.cider.style}</h3>
          </div>
          <div className="cider-detail-description">
            Description: {this.state.cider.description}
          </div>
          <div className="cider-detail-average">
            Average Rating: {this.state.cider.average}
          </div>
          <ReviewIndex reviews={this.state.cider.reviews} />
        </article>
      </div>
    );
  }
});
