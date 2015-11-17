var CiderIndexItem = React.createClass ({

  render: function () {
    return (
      <li className="cider-index-item">
        {this.props.cider.name}
      </li>
    );
  }
});
