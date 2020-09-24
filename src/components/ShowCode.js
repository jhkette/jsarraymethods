import React, { Component } from "react";
import { connect } from "react-redux";
import Typist from "react-typist";
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
   
    return this.props.posts && this.props.operation ? (
      <div>
        <div
          className="show-code"
          dangerouslySetInnerHTML={this.createMarkup()}
        />

        <div className="show-code">
          {this.props.posts.desc ? (
            <Typist> <Typist.Delay ms={450}/>{this.props.posts.output}</Typist>
          ) : (
            ""
          )}
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
