var CiderIndex = React.createClass({
  getInitialState: function () {
    return {
      ciders: CiderStore.all(),
      page: 1
    };
  },

  componentDidMount: function () {
    CiderStore.addChangeListener(this.changed);
    ApiUtil.fetchCiders();
  },

  componentWillUnmount: function () {
    CiderStore.removeChangeListener(this.changed);
  },

  changed: function () {
    this.setState({ciders: CiderStore.all()});
  },

  fetchMoreCiders: function (e) {
    e.preventDefault();
    var pageNum = (this.state.page + 1);
    ApiUtil.fetchNextCiders(pageNum, function () {
      this.setState({page: pageNum});
    }.bind(this));
  },

  handleItemClick: function (cider) {
    this.props.history.pushState(null, "ciders/" + cider.id );
  },

  render: function () {
    return (
      <div className="cider-index">
        <h1>All Ciders</h1>
          {
            this.state.ciders.map(function (cider) {
              var boundClick = this.handleItemClick.bind(this, cider);
              return <CiderIndexItem
                cider={cider}
                onClick={boundClick}
                key={"C"+cider.id}
                currentUser={this.props.currentUser} />
            }.bind(this))
          }
        <div>
          <button onClick={this.fetchMoreCiders}>Fetch MOAR!</button>          
        </div>
      </div>
    );
  }
});
