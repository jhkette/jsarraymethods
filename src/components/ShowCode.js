import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

 class ShowCode extends Component {

    componentDidMount() {
        this.props.fetchPosts();
      }
    
  render() {
      console.log(this.props.posts)
    return (
      <div>
          ShowCode
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return { posts: state };
  };
  

  export default connect(mapStateToProps, { fetchPosts })(ShowCode);