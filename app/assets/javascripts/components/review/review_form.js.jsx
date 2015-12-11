var ReviewForm = React.createClass({

  getInitialState: function () {
    if (this.props.review) {
      return {
        look_rating: this.props.review.look_rating,
        smell_rating: this.props.review.smell_rating,
        taste_rating: this.props.review.taste_rating,
        feel_rating: this.props.review.feel_rating,
        overall_rating: this.props.review.overall_rating,
        id: this.props.review.id,
        content: this.props.review.content,
        hidden: false,
        currentUser: CurrentUserStore.currentUser(),
        type: "PATCH"
      };
    }
    return {
      look_rating: 3,
      smell_rating: 3,
      taste_rating: 3,
      feel_rating: 3,
      overall_rating: 3,
      content: "",
      id: null,
      hidden: true,
      currentUser: CurrentUserStore.currentUser(),
      type: "POST"
    };
  },

  componentWillReceiveProps: function () {
    if (this.props.review) {
      return {
        look_rating: this.props.review.look_rating,
        smell_rating: this.props.review.smell_rating,
        taste_rating: this.props.review.taste_rating,
        feel_rating: this.props.review.feel_rating,
        overall_rating: this.props.review.overall_rating,
        id: this.props.review.id,
        content: this.props.review.content,
        hidden: true,
        currentUser: CurrentUserStore.currentUser(),
        type: "PATCH"
      };
    }
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
    if (this.state.type === "POST") {
      ApiUtil.createReview(newForm, this.props.ciderId, function () {
        window.scroll(0, window.outerHeight);
      });
    }
    else {
      ApiUtil.editReview(newForm, this.state.id, this.props.ciderId, function () {
        window.scroll(0, window.outerHeight);
      });
    }
    ga('send', {
      hitType: 'event',
      eventCategory: 'Review',
      eventAction: 'Submit Cider Review',
      eventLabel: this.props.ciderId
    });
    if (this.props.callback) { this.props.callback(); }
    this.resetStates();
  },

  resetStates: function () {
    this.setState({
      hidden: true
    });
  },

  toggleForm: function () {
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
    var button;
    var cancel = this.handleCancel;
    if (this.state.type != "PATCH") {
      button = (
        <button onClick={this.toggleForm} className="rate-toggle-button">Review This Cider</button>
      );
    }
    else {
      cancel = this.props.callback;
    }
    return (
      <div className="toggle-rate">
        {button}
        <div className={klassName}>
          <form onSubmit={this.handleSubmit} className="review-form group">
            <img className="author-thumb" src={this.state.currentUser.image_url}
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
                <textarea
                  onChange={this.handleContent}
                  className="rating-sub"
                  name="review[content]"
                  value={this.state.content}></textarea>
                <button
                  className="rating-button rating-sub"
                  value="submit">Submit Rating</button>
                <button onClick={cancel} className="cancel-button rating-sub">Cancel</button>
              </div>
            </div>
          </form>

        </div>
      </div>
    );
  }
});
