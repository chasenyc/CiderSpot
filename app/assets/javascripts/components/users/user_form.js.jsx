(function(root) {
  root.UserForm = React.createClass({
    mixins: [ReactRouter.History],

    submit: function (e) {
      e.preventDefault();

    },

    render: function() {

      return (
        <form onSubmit={ this.submit }>

          <label>Username:
            <input type="text" name="user[username]" />
          </label>

          <label>Email:
            <input type="email" name="user[email]" />
          </label>

          <label>Password:
            <input type="password" name="user[password]" />
          </label>

          <label>Birthdate:
            <input type="date" name="user[birthdate]" />
          </label>


          <button>Join!</button>
        </form>
      );
    },

  })
})(this);
