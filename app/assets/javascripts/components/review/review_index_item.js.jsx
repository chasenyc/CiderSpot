var ReviewIndexItem = React.createClass({

  render: function () {
    return (
      <li className="review-index-item group">
        <img className="author-thumb" src={this.props.review.author.avatar_url}
          alt={this.props.review.author.username}></img>
        <div className="review-info">
            &nbsp;
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
          <div className="review-content">
            {this.props.review.content}&nbsp;
          </div>
        </div>
      </li>
    );
  }
});
