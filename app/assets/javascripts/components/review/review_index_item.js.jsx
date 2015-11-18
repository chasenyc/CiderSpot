var ReviewIndexItem = React.createClass({

  render: function () {
    return (
      <li className="review-index-item group">
        <img className="author-thumb" src={this.props.review.author.avatar_url}
          ></img>
        <div className="review-info">
          <div className="review-title">
            {this.props.review.title}&nbsp;
          </div>
          <div className="review-content">
            {this.props.review.content}&nbsp;
          </div>
          <div className="review-ratings">
            <div className="review-ratings overall">
              Overall: {this.props.review.overall_rating}
            </div>
            <div className="review-ratings feel">
              Feel: {this.props.review.feel_rating}
            </div>
            <div className="review-ratings taste">
              Taste: {this.props.review.taste_rating}
            </div>
            <div className="review-ratings smell">
              Smell: {this.props.review.smell_rating}
            </div>
            <div className="review-ratings look">
              Look: {this.props.review.look_rating}
            </div>
          </div>
        </div>
      </li>
    );
  }
});
