var CiderIndexItem = React.createClass ({

  getInitialState: function () {
    return {user: CurrentUserStore.currentUser()};
  },

  componentDidMount: function () {
    CurrentUserStore.addChangeHandler(this.changed);
  },

  componentWillUnmount: function () {
    CurrentUserStore.removeChangeHandler(this.changed);
  },

  changed: function () {
    this.setState({user: CurrentUserStore.currentUser()});
  },

  render: function () {
    var wantGot;
    if (CurrentUserStore.isLoggedIn()) {
      wantGot = (<CiderIndexWantGot ciderId={this.props.cider.id} />);
    }
    return (
      <article onClick={this.props.onClick} className="cider-index-item">
        <img className="fixed-height" src={this.props.cider.image_url}></img>
        <div className="cider-index-info">
          <div className="cider-index-item-name">
            {this.props.cider.name}
          </div>
          <div className="cider-index-item-brewery">
            {this.props.cider.brewery.name}
          </div>
          <div className="cider-index-item-average">
            Average Rating: {this.props.cider.average}
          </div>
        </div>
        <div className="want-got-container">
          {wantGot}
        </div>
      </article>
    );
  }
});
