$(function(){
  var root = document.getElementById('content');
  var RouteHandler = ReactRouter.RouteHandler;
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var routes = (
      <Route path="/" component={App}>
        <IndexRoute component={CiderIndex}/>
        <Route path="login" component={ SessionForm }/>
        <Route path="signup" component={ UserForm }/>
        <Route path="editprofile" component={ UserEditForm }/>
        <Route path="ciders/:ciderId" component={CiderDetailView} />
      </Route>
  );
  React.render(<Router>{routes}</Router>, root);
});
