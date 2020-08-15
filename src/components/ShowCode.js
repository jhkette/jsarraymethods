import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class ShowCode extends Component {
  // runs every time state changes
  componentDidUpdate() {
   
    this.props.fetchPosts("adding", this.props.methods);
  }

  render() {
    
    return (
      <div>
        <p>{this.props.posts.name}</p>
        <p>{this.props.posts.desc}</p>
        <p>{this.props.posts.example}</p>
        <p>{this.props.posts.output}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return { posts: state.posts, methods: state.methods };
};

export default connect(mapStateToProps, { fetchPosts })(ShowCode);
