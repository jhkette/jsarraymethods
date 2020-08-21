import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class ShowCode extends Component {
  // runs every time state changes
  componentDidUpdate(prevProps) {
   if(prevProps.methods !== this.props.methods){
    this.props.fetchPosts(this.props.operation, this.props.methods);
   }
  }

  render() {
    return (
      this.props.methods ? (
      <div className="show-code">
        <p>{this.props.posts.name}</p>
        <p>{this.props.posts.desc}</p>
        <p>{this.props.posts.example}</p>
        <p>{this.props.posts.output}</p>
      </div> ): ('')   
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return { posts: state.posts, methods: state.methods, operation: state.operation };
};

export default connect(mapStateToProps, { fetchPosts })(ShowCode);