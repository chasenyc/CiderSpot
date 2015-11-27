var CiderIndexItem = React.createClass ({

  getInitialState: function () {
    return {currentUser: this.props.currentUser};
  },

  componentWillReceiveProps: function (newProps) {
    this.setState({currentUser: newProps.currentUser});
  },

  render: function () {
    var wantGot;
    if (CurrentUserStore.isLoggedIn()) {
      wantGot = (
        <CiderIndexWantGot
          ciderId={this.props.cider.id}
          currentUser={this.props.currentUser} />
      );
    }
    return (
      <article onClick={this.props.onClick} className="cider-index-item">
        <img className="fixed-height" src={this.props.cider.image_url}></img>
        <div className="cider-index-info">
        <div className="want-got-container">
          {wantGot}
        </div>
          <div className="cider-index-item-name">
            {this.props.cider.name}
          </div>
          <div className="cider-index-item-brewery">
            {this.props.cider.brewery.name}
          </div>
        </div>
        <div className="cider-index-item-average">
          Average Rating: {this.props.cider.average}
        </div>
      </article>
    );
  }
});
