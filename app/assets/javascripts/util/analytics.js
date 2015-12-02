var Analytics = {
    componentDidMount: function () {
      if (this.props.location) {
        ga('send', 'pageview', this.props.location.pathname);
      }      
    }
};
