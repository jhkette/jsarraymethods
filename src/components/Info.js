import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class Info extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.methods !== this.props.methods) {
      console.log(this.props.operation, this.props.methods);
      this.props.fetchPosts(this.props.operation, this.props.methods);
    }
  }
  render() {
    return this.props.methods && this.props.operation ? (
      <div className="info">
        <h2>{this.props.posts.name}</h2>
        <p>{this.props.posts.desc}</p>
      </div>
    ) : (
      ""
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    methods: state.methods,
    operation: state.operation,
  };
};

export default connect(mapStateToProps, { fetchPosts })(Info);
