var CiderIndex = React.createClass({
  getInitialState: function () {
    return {ciders: CiderStore.all()};
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
                key={"C"+cider.id} />
            }.bind(this))
          }
      </div>
    );
  }
});
