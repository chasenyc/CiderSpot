var CiderDetailView = React.createClass({

  getInitialState: function () {
    var ciderId = this.props.params.ciderId;
    var cider = this._findCiderById(ciderId) || {} ;
    return {
      cider: cider,
      currentUser: CurrentUserStore.currentUser()
     };

  },

  componentWillReceiveProps: function (newProps) {
    this.setState({currentUser: newProps.currentUser});
  },

  componentDidMount: function () {
    CiderStore.addSingleChangeListener(this.changed);
    ApiUtil.fetchCider(this.props.params.ciderId);
  },

  componentWillUnmount: function () {
    CiderStore.removeSingleChangeListener(this.changed);
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
    var organic;
    var reviewForm;
    if (this.state.cider.organic === "Y") {
      organic = "Yes";
    } else {
      organic = "No";
    }

    if (CurrentUserStore.isLoggedIn()) {
      reviewForm = (<ReviewForm ciderId={this.state.cider.id} />);
    }

    if (this.state.cider.brewery === undefined) { return <div></div>; };
    return (
      <div className="cider-detail">
        <article>
          <img className="cider-thumb" src={this.state.cider.image_url}></img>
          <h1 className="cider-head">{this.state.cider.name}</h1>
          <div className="cider-subhead">
            <h2 className="brewery-subhead">{this.state.cider.brewery.name}</h2>
            <h3 className="style-subhead">Style:&nbsp; </h3>{this.state.cider.style.name}
          </div>
          <div className="cider-details">
          {reviewForm}
            <div className="cider-detail-ratings">
              {this.state.cider.review_count} ratings: {this.state.cider.average}
            </div>
            <div className="cider-detail-abv">
              Alcohol By Volume: {this.state.cider.abv}%
            </div>
            <div className="cider-detail-organic">
              Organic: {organic}
            </div>

            <div className="cider-detail-description">
              {this.state.cider.description}
            </div>
          <ReviewIndex currentUser={this.props.currentUser} reviews={this.state.cider.reviews} />
          </div>
        </article>
      </div>
    );
  }
});
