var ReviewIndex = React.createClass({

  render: function () {
    if (this.props.reviews === undefined) { return (<div></div>); }
    var currUser;
    if (this.props.currentUser) { currUser = this.props.currentUser; }
    return(
      <div className="review-index">
        <ul>
        <h3 className="review-index-header">Reviews</h3>
          {
            this.props.reviews.map(function(review) {
              return <ReviewIndexItem
                          currentUser={currUser}
                          key={"R"+review.id}
                          review={review}
                          />;
            })
          }
        </ul>
      </div>
    );
  }
});
