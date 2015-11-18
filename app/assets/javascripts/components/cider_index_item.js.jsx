var CiderIndexItem = React.createClass ({

  render: function () {

    return (
      <li onClick={this.props.onClick} className="cider-index-item">
        <img src={this.props.cider.image_url}></img>
        <div className="cider-index-item-name">
          Name: {this.props.cider.name}
        </div>
        <div className="cider-index-item-brewery">
          Brewery ID: {this.props.cider.brewery_id}
        </div>
        <div className="cider-index-item-average">
          Average Rating: {this.props.cider.average}
        </div>

      </li>
    );
  }
});
