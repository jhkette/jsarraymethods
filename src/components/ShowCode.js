import React, { Component } from "react";
import { connect } from "react-redux";
import Typer from './Type2'

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

    return this.props.posts && this.props.operation ? (
      <div>
        <h3>Example</h3>
        <div
          className="show-code"
          dangerouslySetInnerHTML={this.createMarkup()}
        />
        <h3>Output</h3>
        <div className="show-code">
          <Typer dataTxt={this.props.posts.output} />
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
