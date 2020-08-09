import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchPosts } from "./actions";

import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div className="App">
        <h1>Hi there</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state };
};

export default connect(mapStateToProps, { fetchPosts })(App);
