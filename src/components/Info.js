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

  jsUcfirst = (str) => {
    return (
      str.charAt(0).toUpperCase() +
      str.slice(1)
    );
  };
  render() {
    return this.props.posts.desc &&
      this.props.posts.name && this.props.operation ? (
      <div className="info">
        <h2>{this.jsUcfirst(this.props.posts.name)}</h2>
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
