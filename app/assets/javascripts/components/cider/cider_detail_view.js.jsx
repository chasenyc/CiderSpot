var CiderDetailView = React.createClass({

  getInitialState: function () {
    var ciderId = this.props.params.ciderId;
    var cider = this._findCiderById(ciderId) || {} ;
    return {
      cider: cider,
      user: CurrentUserStore.currentUser()
     };
  },

  componentDidMount: function () {
    CiderStore.addSingleChangeListener(this.changed);
    CurrentUserStore.addChangeHandler(this.userChanged);
    ApiUtil.fetchCider(this.props.params.ciderId);
  },

  componentWillUnmount: function () {
    CiderStore.removeSingleChangeListener(this.changed);
    CurrentUserStore.removeChangeHandler(this.userChanged);
  },

  changed: function () {
    var ciderId = this.props.params.ciderId;
    var cider = this._findCiderById(ciderId) || {} ;
    this.setState({cider: cider});
  },

  userChanged: function () {
    this.setState({user: CurrentUserStore.currentUser()});
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
            <h3 className="style-subhead">Style: {this.state.cider.style}</h3>
          </div>
          <div className="cider-details">
            <div className="cider-detail-ratings">
              Average Total Rating: {this.state.cider.average}
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
          {reviewForm}
          <ReviewIndex  reviews={this.state.cider.reviews} />
          </div>
        </article>
      </div>
    );
  }
});
