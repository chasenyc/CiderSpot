var GotsIndex = React.createClass({

  mixins: [ReactRouter.History],

  getInitialState: function () {
    return {
      currentUser: CurrentUserStore.currentUser()
    };
  },

  componentDidMount: function () {
    CurrentUserStore.addChangeHandler(this.changed);
  },

  componentWillReceiveProps: function () {
    this._ensureLoggedIn();
  },

  componentWillUnmount: function () {
    CurrentUserStore.removeChangeHandler(this.changed);
  },

  changed: function () {
    this.setState({
      currentUser: CurrentUserStore.currentUser()
    });
  },

  handleItemClick: function (cider) {
    this.props.history.pushState(null, "ciders/" + cider.id );
  },

  render: function () {
    var gots = [];
    if (Object.keys(this.state.currentUser).length > 0)
    {
      gots = this._getGottenCiders();
    }

    return (
      <div className="cider-index">
        <h1>Gotten Ciders</h1>
        {
          gots.map(function (cider) {
            var boundClick = this.handleItemClick.bind(this, cider);
            return <CiderIndexItem
              cider={cider}
              onClick={boundClick}
              key={"CG"+cider.id}
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

  _getGottenCiders: function () {
    return CurrentUserStore.currentUser().gots
  }
});
