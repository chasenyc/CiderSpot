function integrateAnalytics(Component) {

  const AnalyticsConnection = React.createClass({
    componentDidMount: function () {
      if (this.props.location) {
        ga('send', 'pageview', this.props.location.pathname);
      }
    },

    render() {
      return <Component {...this.props} {...this.state}/>;
    }
  });
  return AnalyticsConnection;
};
