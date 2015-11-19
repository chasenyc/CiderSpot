var ReviewIndexItem = React.createClass({

  handleLike: function (e) {
    e.stopPropagation();
    ApiUtil.createLike(this.props.review.id);
  },

  render: function () {
    return (
      <li className="review-index-item group">
        <img className="author-thumb" src={this.props.review.author.avatar_url}
          alt={this.props.review.author.username}></img>
        <div className="review-info">
          <div className="review-meta">
            <div className="review-meta-user">
              {this.props.review.author.username}
            </div>
            <div className="review-meta-ratings">
              Look: {this.props.review.look_rating}&nbsp;
              Smell: {this.props.review.smell_rating}&nbsp;
              Taste: {this.props.review.taste_rating}&nbsp;
              Feel: {this.props.review.feel_rating}&nbsp;
              Overall: {this.props.review.overall_rating}&nbsp;
            </div>
          </div>
          <div className="review-content">
            {this.props.review.content}&nbsp;
          </div>
          <div className="review-footer">
            <span onClick={this.handleLike} className="review-like-button">Like this review</span>
          </div>
        </div>
      </li>
    );
  }
});
