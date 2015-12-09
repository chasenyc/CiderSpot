var ReviewIndex = React.createClass({

  render: function () {
    if (this.props.reviews === undefined) { return (<div></div>); }
    var header = 'Reviews';
    if (this.props.reviews.length < 1) {
      header = 'No Reviews Yet';
    }
    var currUser;
    if (this.props.currentUser) { currUser = this.props.currentUser; }
    return(
      <div className="review-index">
        <h3 className="review-index-header">{header}</h3>
        <ul className="review-index-ul">
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
