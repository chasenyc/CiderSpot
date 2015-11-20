$(function(){
  var root = document.getElementById('content');
  var RouteHandler = ReactRouter.RouteHandler;
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;
  var App = React.createClass({
    getInitialState: function () {
      return ({errors: []});
    },

    componentDidMount: function () {
      window.addEventListener('scroll', this.handleScroll);
      ErrorStore.addChangeListener(this.changed);
    },

    componentWillUnmount: function () {
      window.removeEventListener('scroll', this.handleScroll);
      ErrorStore.removeChangeListener(this.changed);
    },

    handleScroll: function (){
      if (window.scrollY > 50) {
        document.getElementsByClassName('nav')[0].className = 'nav top';
      } else {
        document.getElementsByClassName('nav')[0].className = 'nav';
      }
    },


    changed: function () {
      this.setState({errors: ErrorStore.all()});
      window.setTimeout(function () {
        this.setState({errors: []});
      }.bind(this), 6000);
    },

    render: function(){
      if (this.state.errors.length > 0) {
        return (
          <div className="top">
            <div className="flash-errors">
              {this.state.errors[0].responseText}
            </div>
            <Header />
            {this.props.children}
          </div>
        );
      }
      return (

          <div className="top">
            <Header />
            {this.props.children}
          </div>
      );
    }
  });
  var routes = (
      <Route path="/" component={App}>
        <IndexRoute component={CiderIndex}/>
        <Route path="login" component={ SessionForm }/>
        <Route path="signup" component={ UserForm }/>
        <Route path="ciders/:ciderId" component={CiderDetailView} />
      </Route>
  );
  React.render(<Router>{routes}</Router>, root);
});
