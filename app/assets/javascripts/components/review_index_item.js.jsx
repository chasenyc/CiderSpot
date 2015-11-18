var ReviewIndexItem = React.createClass({

  render: function () {
    return (
      <li className="review-index-item">
        <img className="author-thumb" src={this.props.review.author.avatar_url}
          ></img>
        <div className="review-title">
          {this.props.review.title}
        </div>
        <div className="review-content">
          {this.props.review.content}
        </div>
      </li>
    );
  }
});
