var ReviewIndexItem = React.createClass({

  handleLike: function (e) {
    e.stopPropagation();
    ApiUtil.createLike(this.props.review.id);
  },

  render: function () {

    var updated = new Date(this.props.review.updated_at);
    var elapsedStr = this._getPostedTimeDiff(updated);

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
            {elapsedStr}
            <span onClick={this.handleLike} className="review-like-button">Like this review</span>
          </div>
        </div>
      </li>
    );
  },

  _getPostedTimeDiff: function (updatedTime) {
    var now = new Date();
    var elapsedStr = "Posted ";
    var elapsed = now.getTime() - updatedTime.getTime();
    var d = Math.floor(elapsed / (1000*60*60*24));
    var h = Math.floor(elapsed / 3600000);
    var m = Math.floor((elapsed % 3600000) / 60000);
    if (d > 0) {
      elapsedStr += d + " days ago. ";
    }
    else if (h > 0) {
      elapsedStr += h + " hours ago. ";
    }
    else if (m > 0) {
      elapsedStr += m + " minutes ago. ";
    }
    else {
      elapsedStr += "just a few seconds ago. ";
    }
    return elapsedStr;
  },
});
