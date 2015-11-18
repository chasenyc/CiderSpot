var ReviewIndex = React.createClass({



  render: function () {
    if (this.props.reviews === undefined) { return (<div></div>); }
    return(
      <div className="review-index">
        <ul>
        Reviews go here!~
          {
            this.props.reviews.map(function(review) {
              return <ReviewIndexItem key={review.id} review={review} />;
            })
          }
        </ul>
      </div>
    );
  }
});
