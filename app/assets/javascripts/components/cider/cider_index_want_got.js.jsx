var CiderIndexWantGot = React.createClass({

  handleGot: function (e) {
    e.stopPropagation();
    ApiUtil.createGot(this.props.ciderId);
  },

  handleWant: function (e) {
    e.stopPropagation();
    ApiUtil.createWant(this.props.ciderId);
  },

  render: function () {

    return (
      <div className="cider-index-item-wantgot">
        <div onClick={this.handleWant} className="want-button">
          Want
        </div>
        <div onClick={this.handleGot} className="got-button">
          Got
        </div>
      </div>
    );
  }
});
