import React, { Component } from "react";
import { connect } from "react-redux";
import Typical from 'react-typical'
import { fetchPosts } from "../actions";

class ShowCode extends Component {
  // runs every time state changes
  componentDidUpdate(prevProps) {
   if(prevProps.methods !== this.props.methods){
     console.log(this.props.operation, this.props.methods)
    this.props.fetchPosts(this.props.operation, this.props.methods);
   }
  }

  render() {
    let arr = []
    if (this.props.methods && this.props.operation){
      arr.push(this.props.posts.output)
    }
    
    return (
      this.props.posts.desc &&
      this.props.posts.name ? (
      <div>
      <div className="show-code">
       
        <p>{this.props.posts.example}</p>
      </div>
      <div className="show-code">
       
        {this.props.posts.desc ?
        <Typical steps={arr}  wrapper="p" /> : ''
        }
      </div> 
      </div>
      ): ('')  
       
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return { posts: state.posts, methods: state.methods, operation: state.operation };
};

export default connect(mapStateToProps, { fetchPosts })(ShowCode);