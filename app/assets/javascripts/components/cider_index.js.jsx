var CiderIndex = React.createClass({
  getInitialState: function () {
    return {ciders: CiderStore.all()};
  },

  componentDidMount: function () {
    CiderStore.addChangeListener(this.changed);
    ApiUtil.fetchCiders();
  },

  changed: function () {
    this.setState({ciders: CiderStore.all()});
  },

  render: function () {

    return (
      <div className="cider-index">
        <ul>
          {
            this.state.ciders.map(function (cider) {
              return <CiderIndexItem cider={cider} key={cider.id} />
            })
          }
        </ul>
      </div>
    );
  }
});
