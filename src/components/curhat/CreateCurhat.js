import React, { Component } from "react";
import { connect } from "react-redux";
import { createCurhat } from "../../store/action/curhatActions";
import { Redirect } from "react-router-dom";

class CreateCurhat extends Component {
  state = {
    title: "",
    content: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createCurhat(this.state);
    this.props.history.push("/");
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Curhat Donk</h5>
          <div className="input-field">
            <label htmlFor="title">Judul Curhat Kamu</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Jadi Kenapa?</label>
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
          </div>
          <button className="btn blue lighten-1 z-depth-2">
            KIRIM CURHATAN
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createCurhat: curhat => dispatch(createCurhat(curhat))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCurhat);
