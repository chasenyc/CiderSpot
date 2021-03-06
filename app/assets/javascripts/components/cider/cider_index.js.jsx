var CiderIndex = React.createClass({

  getInitialState: function () {
    return {
      ciders: CiderStore.all(),
      page: 1,
      style: 'top',
      load: false,
      end: false
    };
  },

  componentDidMount: function () {
    window.addEventListener('scroll', this.handleScroll);
    CiderStore.addChangeListener(this.changed);
    ApiUtil.fetchCiders(0, this.state.style);
  },

  componentWillUnmount: function () {
    window.removeEventListener('scroll', this.handleScroll);
    CiderStore.removeChangeListener(this.changed);
  },

  handleScroll: function () {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight &&
         this.state.load && !this.state.end)
    {
      var pageNum = (this.state.page + 1);
      ApiUtil.fetchNextCiders(pageNum, this.state.style, function () {
        this.setState({page: pageNum});
      }.bind(this), function () {
        this.setState({end: true});
      }.bind(this));
    }
  },

  changed: function () {
    this.setState({ciders: CiderStore.all()});
  },

  fetchMoreCiders: function (e) {
    e.preventDefault();
    var pageNum = (this.state.page + 1);
    ga('send', {
      hitType: 'event',
      eventCategory: 'Show More',
      eventAction: 'Fetch More Ciders',
      eventLabel: "Page " + pageNum
    });
    ApiUtil.fetchNextCiders(pageNum, this.state.style, function () {
      this.setState({page: pageNum, load: true});
    }.bind(this), function () {
      this.setState({end: true});
    }.bind(this));
  },

  handleItemClick: function (cider) {
    this.props.history.pushState(null, "ciders/" + cider.id );
  },

  handleSort: function (e) {
    var style = e.target.value;
    ga('send', {
      hitType: 'event',
      eventCategory: 'Sort',
      eventAction: 'Change Sort',
      eventLabel: style
    });
    this.setState({page: 1, style: style, end: false});
    ApiUtil.fetchCiders(1, style);
  },

  render: function () {
    var showMoreCiders = (
      <div className="cider-index-load-more">
        <button className="more-button"
          onClick={this.fetchMoreCiders}>Show More Ciders</button>
      </div>
    );

    if (this.state.end) {
      showMoreCiders = (
        <div className="cider-index-end more-button">
          ~ el fin ~
        </div>
      );
    }

    return (
      <div className="cider-index">
        <h1>All Ciders</h1>
        <div className="cider-index-select group">
          <select onChange={this.handleSort}>
            <option value="top">Top-rated first</option>
            <option value="bottom">Bottom-rated first</option>
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
          </select>
          <label>Sort Results:</label>
        </div>
        <div className="cider-index-articles group">
          {
            this.state.ciders.map(function (cider) {
              var boundClick = this.handleItemClick.bind(this, cider);
              return <CiderIndexItem
                cider={cider}
                onClick={boundClick}
                key={"cid"+cider.id}
                currentUser={this.props.currentUser} />
            }.bind(this))
          }
        </div>
        {showMoreCiders}
      </div>
    );
  }
});

CiderIndex = integrateAnalytics(CiderIndex);
