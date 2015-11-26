var App = React.createClass({
  getInitialState: function () {
    return ({
      errors: [],
      currentUser: CurrentUserStore.currentUser(),
      signUp: false,
      logIn: false,
      sidebar: false
    });
  },

  componentWillReceiveProps: function () {

  },

  componentDidMount: function () {
    window.addEventListener('scroll', this.handleScroll);
    ErrorStore.addChangeListener(this.changed);
    CurrentUserStore.addChangeHandler(this.userChanged);
  },

  componentWillUnmount: function () {
    window.removeEventListener('scroll', this.handleScroll);
    ErrorStore.removeChangeListener(this.changed);
    CurrentUserStore.removeChangeHandler(this.userChanged);
  },

  handleScroll: function (){
    if (window.scrollY > 50) {
      document.getElementsByClassName('nav')[0].className = 'nav top';
      document.getElementById('gear').className = 'nav-icon down user-info right gear group';
    } else {
      document.getElementsByClassName('nav')[0].className = 'nav';
      document.getElementById('gear').className = 'nav-icon user-info right gear group';
    }
  },

  userChanged: function () {
    this.setState({currentUser: CurrentUserStore.currentUser()});
  },

  changed: function () {
    this.setState({
      errors: ErrorStore.all()
    });
    window.setTimeout(function () {
      this.setState({errors: []});
    }.bind(this), 6000);
  },

  toggleSignUp: function () {
    this.setState({signUp: !this.state.signUp});
  },

  toggleLogIn: function () {
    this.setState({logIn: !this.state.logIn});
  },

  toggleSidebar: function () {
    this.setState({sidebar: !this.state.sidebar});
  },

  render: function(){
    var renderedChildren = React.Children.map(this.props.children,
      function (child) {
        return React.cloneElement(
        child, { currentUser: this.state.currentUser }
        );
      }.bind(this)
    );

    var modal;
    if (this.state.signUp === true) {
      modal = (<UserForm toggleSignUp={this.toggleSignUp} />);
    }
    if (this.state.logIn === true) {
      modal = (<SessionForm toggleSignUp={this.toggleLogIn} />);
    }
    if (this.state.errors.length > 0) {
      return (
        <div className="top">
          <div className="flash-errors">
            {this.state.errors[0].responseText}
          </div>
          <Header
            toggleSignUp={this.toggleSignUp}
            toggleLogIn={this.toggleLogIn}
            toggleSidebar={this.toggleSidebar} />
          <Sidebar
            expanded={this.state.sidebar}
            currentUser={this.state.currentUser}
            toggleLogIn={this.toggleLogIn} />
          {renderedChildren}
          {modal}
        </div>
      );
    }
    return (
        <div className="top">
          <Header
            toggleSignUp={this.toggleSignUp}
            toggleLogIn={this.toggleLogIn}
            toggleSidebar={this.toggleSidebar} />
          <Sidebar
            expanded={this.state.sidebar}
            currentUser={this.state.currentUser}
            toggleLogIn={this.toggleLogIn} />
          {renderedChildren}
          {modal}
        </div>
    );
  }
});
