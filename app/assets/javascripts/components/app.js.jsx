var App = React.createClass({
  getInitialState: function () {
    return ({
      errors: [],
      currentUser: CurrentUserStore.currentUser(),
      signUp: false,
      logIn: false,
      sidebar: false,
      search: false,
      breweries: []
    });
  },

  componentWillReceiveProps: function () {

  },

  componentDidMount: function () {
    window.addEventListener('scroll', this.handleScroll);
    ErrorStore.addChangeListener(this.changed);
    CurrentUserStore.addChangeHandler(this.userChanged);
    BreweryStore.addChangeListener(this.breweriesChanged);
  },

  componentWillUnmount: function () {
    window.removeEventListener('scroll', this.handleScroll);
    ErrorStore.removeChangeListener(this.changed);
    CurrentUserStore.removeChangeHandler(this.userChanged);
    BreweryStore.removeChangeListener(this.breweriesChanged);
  },

  handleScroll: function (){
    if (window.scrollY > 50) {

      document.getElementsByClassName('nav')[0].className = 'nav top';

      if (document.getElementById('gear')) {
        document.getElementById('gear').className = 'nav-icon down user-info right gear group';
      }

      if (document.getElementById('search')) {
        document.getElementById('search').className = 'nav-icon down user-info right search group';
      }

      document.getElementById('right-arrow').className = 'nav-icon down user-info left right-arrow group';
    } else {

      document.getElementsByClassName('nav')[0].className = 'nav';

      if (document.getElementById('gear')) {
        document.getElementById('gear').className = 'nav-icon user-info right gear group';
      }

      if (document.getElementById('search')) {
        document.getElementById('search').className = 'nav-icon user-info right search group';
      }
      document.getElementById('right-arrow').className = 'nav-icon user-info left right-arrow group';
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

  breweriesChanged: function () {
    this.setState({breweries: BreweryStore.all()});
  },

  toggleSignUp: function () {
    this.setState({signUp: !this.state.signUp});
  },

  toggleLogIn: function () {
    this.setState({logIn: !this.state.logIn});
  },

  toggleSidebar: function () {
    if (!this.state.sidebar) {
      this.removeSearch();
    }
    this.setState({sidebar: !this.state.sidebar});
  },

  toggleSearch: function () {
    if (!this.state.search) {
      this.removeSidebar();
    }
    this.setState({search: !this.state.search});
  },

  removeSearch: function () {
    this.setState({search: false});
  },

  removeSidebar: function () {
    this.setState({sidebar: false});
  },

  render: function(){
    var renderedChildren = React.Children.map(this.props.children,
      function (child) {
        return React.cloneElement(
        child, Object.assign({}, this.state, this.props)
        );
      }.bind(this)
    );
    var searchKlass = "header-search";
    if (this.state.search) {
      searchKlass += " open";
    }
    var searchBar = (
      <div className={searchKlass}>
        <SearchBar query="" toggleSearch={this.toggleSearch} />
      </div>
    );
    var modal;
    if (this.state.signUp === true) {
      modal = (<UserForm toggleSignUp={this.toggleSignUp} />);
    }
    if (this.state.logIn === true) {
      modal = (<SessionForm toggleSignUp={this.toggleLogIn} />);
    }
    var errors;
    if (this.state.errors.length > 0) {
      errors = (
        <div className="flash-errors">
          {this.state.errors[0].responseText}
        </div>
      );
    }
    return (
        <div id="top" className="top">
          {searchBar}
          {errors}
          <Header
            toggleSignUp={this.toggleSignUp}
            toggleLogIn={this.toggleLogIn}
            toggleSidebar={this.toggleSidebar}
            toggleSearch={this.toggleSearch}
            removeSearch={this.removeSearch}
            removeSidebar={this.removeSidebar} />
          <Sidebar
            expanded={this.state.sidebar}
            currentUser={this.state.currentUser}
            toggleLogIn={this.toggleLogIn}
            removeSearch={this.removeSearch} />
          {renderedChildren}
          {modal}
        </div>
    );
  }
});
