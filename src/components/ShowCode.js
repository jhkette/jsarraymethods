import React, { Component } from "react";
import { connect } from "react-redux";
import Typer from './Typewriter'

import { fetchPosts } from "../actions";

class ShowCode extends Component {
 
  // runs every time state changes
  componentDidUpdate(prevProps) {
    if (prevProps.methods !== this.props.methods) {
      this.props.fetchPosts(this.props.operation, this.props.methods);
    }
  }

  createMarkup() {
    return { __html: this.props.posts.example };
  }
  

  renderText() {
    // console.log(this.props.posts.output)

    return this.props.posts.output && this.props.operation ? (
      <div>
        <div
          className="show-code"
          dangerouslySetInnerHTML={this.createMarkup()}
        />

        <div className="show-code">
          <Typer heading={'Things I want to type:'} dataText={[...this.props.posts.output]} />
        </div>
      </div>
    ) : (
      ""
    );
  }

  render() {
    return this.props.posts ? this.renderText() : "";
  }
}

// dangerouslySetInnerHTML

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    methods: state.methods,
    operation: state.operation,
  };
};

export default connect(mapStateToProps, { fetchPosts })(ShowCode);
