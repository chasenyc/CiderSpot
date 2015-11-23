var App = React.createClass({
  getInitialState: function () {
    return ({
      errors: [],
      currentUser: CurrentUserStore.currentUser(),
      signUp: false
    });
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
    } else {
      document.getElementsByClassName('nav')[0].className = 'nav';
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

  render: function(){
    var renderedChildren = React.Children.map(this.props.children,
      function (child) {
        return React.cloneElement(
        child, { currentUser: this.state.currentUser }
        );
      }.bind(this)
    );

    var signUp;
    if (this.state.signUp === true) {
      signUp = (<UserForm toggleSignUp={this.toggleSignUp} />);
    }
    if (this.state.errors.length > 0) {
      return (
        <div className="top">
          <div className="flash-errors">
            {this.state.errors[0].responseText}
          </div>
          <Header toggleSignUp={this.toggleSignUp}/>
          {renderedChildren}
          {signUp}
        </div>
      );
    }
    return (

        <div className="top">
          <Header toggleSignUp={this.toggleSignUp} />
          {renderedChildren}
          {signUp}
        </div>
    );
  }
});
