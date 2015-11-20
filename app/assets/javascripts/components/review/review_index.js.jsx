var ReviewIndex = React.createClass({



  render: function () {
    if (this.props.reviews === undefined) { return (<div></div>); }
    return(
      <div className="review-index">
        <ul>
        <h3 className="review-index-header">Reviews</h3>
          {
            this.props.reviews.map(function(review) {
              return <ReviewIndexItem key={"R"+review.id} review={review} />;
            })
          }
        </ul>
      </div>
    );
  }
});
