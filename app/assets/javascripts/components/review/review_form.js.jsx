var ReviewForm = React.createClass({

  getInitialState: function () {
    return {
      look_rating: 3,
      smell_rating: 3,
      taste_rating: 3,
      feel_rating: 3,
      overall_rating: 3,
      content: "",
      hidden: true,
      currentUser: CurrentUserStore.currentUser()
    };
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var newForm = new FormData ();
    newForm.append("review[look_rating]", this.state.look_rating);
    newForm.append("review[smell_rating]", this.state.smell_rating);
    newForm.append("review[taste_rating]", this.state.taste_rating);
    newForm.append("review[feel_rating]", this.state.feel_rating);
    newForm.append("review[overall_rating]", this.state.overall_rating);
    newForm.append("review[content]", this.state.content);
    this.resetStates();
    ApiUtil.createReview(newForm, this.props.ciderId);
  },

  resetStates: function () {
    this.setState({
      look_rating: 3,
      smell_rating: 3,
      taste_rating: 3,
      feel_rating: 3,
      overall_rating: 3,
      content: "",
      hidden: true
    });
  },

  toggleForm: function (e) {
    e.preventDefault()
    this.setState({hidden: !this.state.hidden});
  },

  handleRate: function (e) {
    var obj = {hidden: false};
    obj[e.target.name] = e.target.value;
    this.setState(obj);
  },

  handleCancel: function (e) {
    e.preventDefault();
    window.setTimeout(function () {
      this.setState({hidden: true});
    }.bind(this), 1);
  },

  handleContent: function (e) {
    this.setState({content: e.target.value});
  },

  render: function () {
    var klassName = "review-box";
    if (this.state.hidden === true) {
      klassName += " hidden";
    }

    return (
      <div onClick={this.toggleForm} className="toggle-rate">
        <button className>Rate</button>
        <div className={klassName}>
          <form onSubmit={this.handleSubmit} className="review-form">
            <img className="author-thumb" src={this.state.currentUser.avatar_url}
            alt={this.state.currentUser.username}></img>
            <div className="review-info">
              <div className="rating-bar">
                <label className="rating-sub" >Look:
                  <select onChange={this.handleRate} value={this.state.look_rating} name="look_rating">
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                  </select>
                </label>
                <label className="rating-sub">Smell:
                  <select onChange={this.handleRate} value={this.state.smell_rating} name="smell_rating">
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                  </select>
                </label>
                <label className="rating-sub">Taste:
                  <select onChange={this.handleRate} value={this.state.taste_rating} name="taste_rating">
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                  </select>
                </label>
                <label className="rating-sub">Feel:
                  <select onChange={this.handleRate} value={this.state.feel_rating} name="feel_rating">
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                  </select>
                </label>
                <label className="rating-sub">Overall:
                  <select onChange={this.handleRate} value={this.state.overall_rating} name="overall_rating">
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                  </select>
                </label>
              </div>
              <div className="text-submit">
                <textarea onChange={this.handleContent} className="rating-sub" name="review[content]" value={this.state.content}></textarea>
                <button onClick={this.handleCancel} className="cancel-button rating-sub">Cancel</button>
                <button className="rating-button rating-sub">Submit Rating</button>
              </div>
            </div>
          </form>

        </div>
      </div>
    );
  }
});
