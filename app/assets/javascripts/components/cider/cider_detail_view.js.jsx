var CiderDetailView = React.createClass({

  getInitialState: function () {
    var ciderId = this.props.params.ciderId;
    var cider = this._findCiderById(ciderId) || {} ;
    return {
      cider: cider,
      currentUser: CurrentUserStore.currentUser(),
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

  toggleHiddenReview: function () {
    this.setState({reviewHidden: !this.state.reviewHidden});
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

  _findCurrentUserReview: function () {
    if (!this.state.currentUser || !this.state.cider.reviews) { return; }
    var userId = this.state.currentUser.id;
    var reviews = this.state.cider.reviews;
    var result;
    reviews.forEach(function(el) {
      if (parseInt(userId) === parseInt(el.author.id)) {
        result = reviews.indexOf(el);
      }
    });
    var resultingReview;
    resultingReview = reviews[result];
    return resultingReview;
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

    this._findCurrentUserReview();
    if (CurrentUserStore.isLoggedIn() && !this._findCurrentUserReview()) {
      reviewForm = (
        <div className="top-review">
          <ReviewForm
            ciderId={this.state.cider.id}
            currentUser={this.props.currentUser}
            hidden={this.state.reviewHidden} />
        </div>
      );
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
          {reviewForm}
          <div className="cider-details">
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
            <ReviewIndex
              currentUser={this.props.currentUser} reviews={this.state.cider.reviews}
              />
          </div>
        </article>
      </div>
    );
  }
});
