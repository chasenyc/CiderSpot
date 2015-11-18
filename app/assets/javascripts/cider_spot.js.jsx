$(function(){
  var root = document.getElementById('content');
  var RouteHandler = ReactRouter.RouteHandler;
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;
  var App = React.createClass({
    componentDidMount: function () {
      window.addEventListener('scroll', this.handleScroll);
    },

    handleScroll: function (){
      if (window.scrollY > 50) {
        document.getElementsByClassName('nav')[0].className = 'nav top';
      } else {
        document.getElementsByClassName('nav')[0].className = 'nav';
      }
    },

    render: function(){
      return (

          <div>
            {this.props.children}
          </div>
      );
    }
  });
  var routes = (
      <Route path="/" component={App}>
        <IndexRoute component={CiderIndex}/>
        <Route path="ciders/:ciderId" component={CiderDetailView} />
      </Route>
  );
  React.render(<Router>{routes}</Router>, root);
});
