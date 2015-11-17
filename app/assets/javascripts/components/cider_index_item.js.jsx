var CiderIndexItem = React.createClass ({

  render: function () {
    return (
      <li className="cider-index-item">
        <img src={this.props.cider.image_url}></img>
        <div className="cider-index-item-name">
          {this.props.cider.name}
        </div>
        <div className="cider-index-item-brewery">
          {this.props.cider.brewery_id}
        </div>
        <div className="cider-index-item-average">
          {this.props.cider.average}
        </div>

      </li>
    );
  }
});
