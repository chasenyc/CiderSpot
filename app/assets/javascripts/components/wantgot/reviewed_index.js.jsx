var ReviewedIndex = React.createClass({

    mixins: [ReactRouter.History],

    getInitialState: function () {
      return {
        ciders: CiderStore.all(),
        currentUser: CurrentUserStore.currentUser()
      };
    },

    componentDidMount: function () {
      CiderStore.addChangeListener(this.changed);
      CurrentUserStore.addChangeHandler(this.changed);
      ApiUtil.fetchCiders();
    },

    componentWillReceiveProps: function () {
      this._ensureLoggedIn();
    },

    componentWillUnmount: function () {
      CiderStore.removeChangeListener(this.changed);
      CurrentUserStore.removeChangeHandler(this.changed);
    },

    changed: function () {
      this.setState({
        ciders: CiderStore.all(),
        currentUser: CurrentUserStore.currentUser()
      });
    },

    handleItemClick: function (cider) {
      this.props.history.pushState(null, "ciders/" + cider.id );
    },

    render: function () {
      var reviews = [];
      if (Object.keys(this.state.currentUser).length > 0 &&
          this.state.ciders.length > 0)
      {
        reviews = this._getReviewedCiders();
      }

      if (reviews.length < 1) {
        return(
          <div className="cider-index">
            <h1>Reviewed Ciders</h1>
          </div>
        );
      }

      return (
        <div className="cider-index">
          <h1>Reviewed Ciders</h1>
          {
            reviews.map(function (cider) {
              var boundClick = this.handleItemClick.bind(this, cider);
              return <CiderIndexItem
                cider={cider}
                onClick={boundClick}
                key={"CW"+cider.id}
                currentUser={this.props.currentUser} />
            }.bind(this))
          }
        </div>
      );
    },

    _ensureLoggedIn: function () {
      if (!CurrentUserStore.isLoggedIn()) {
        this.history.pushState(null, "/");
      }
    },

    _getReviewedCiders: function () {
      var reviewedCiders = [];
      this.state.currentUser.reviews.forEach(function (want) {
        var ciderId = want.cider_id;
        var ciders = this.state.ciders.slice(0);
        var resultIdx = ApiUtil.findById(ciders, ciderId);
        if (ciders[resultIdx]) { reviewedCiders.push(ciders[resultIdx]); }
      }.bind(this));
      return reviewedCiders;
    }
});
