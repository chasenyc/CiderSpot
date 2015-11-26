var CiderIndexWantGot = React.createClass({

  handleGot: function (e) {
    e.stopPropagation();
    ApiUtil.createGot(this.props.ciderId);
  },

  handleWant: function (e) {
    e.stopPropagation();
    ApiUtil.createWant(this.props.ciderId);
  },

  handleUnwant: function (e) {
    e.stopPropagation();
    var wantId = parseInt(e.target.dataset.wantid);
    ApiUtil.destroyWant(wantId);
  },

  handleUngot: function (e) {
    e.stopPropagation();
    var gotId = parseInt(e.target.dataset.gotid);
    ApiUtil.destroyGot(gotId);
  },

  render: function () {
    var wantEl = (
      <div onClick={this.handleWant} className="want-button">
        Want
      </div>
    );

    var gotEl = (
      <div onClick={this.handleGot} className="got-button">
        Got
      </div>
    );

    if (this._isWanted() !== false) {
      wantEl = (
        <div data-wantid={this._isWanted()} onClick={this.handleUnwant} className="want-button">
          Unwant
        </div>
      );
    }

    if (this._isGotten() !== false) {
      gotEl = (
        <div data-gotid={this._isGotten()} onClick={this.handleUngot} className="got-button">
          Ungot
        </div>
      );
    }

    return (
      <div className="cider-index-item-wantgot">
        {wantEl}
        {gotEl}
      </div>
    );
  },

  _isWanted: function () {
    var result = false;
    this.props.currentUser.wanted.forEach (function (want) {
      if (want.cider_id === this.props.ciderId) {
        result = want.id
      }
    }.bind(this))
    return result;
  },

  _isGotten: function () {
    var result = false;
    this.props.currentUser.gotten.forEach (function (got) {
      if (got.cider_id === this.props.ciderId) {
        result = got.id
      }
    }.bind(this))
    return result;
  }
});
