import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class ShowCode extends Component {



  
  componentDidMount() {

    this.props.fetchPosts("adding", "shift");
  }

  render() {
   
    console.log(this.props)

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
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(ShowCode);
