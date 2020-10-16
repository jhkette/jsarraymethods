import React, { Component } from "react";

class TypeWriter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      txt: "",
      wordIndex: 0,
      wait: parseInt(1000, 10),
      isDeleting: false,
    };
    this.type();
  }
  componentDidUpdate() {
    // if (prevProps.methods !== this.props.methods) {
    // }
  }

  type() {
    // Current index of word
    if (this.props.dataTxt) {
      // Get full text of current word
      const fullTxt = this.props.dataTxt;
      if (this.state.isDeleting) {
        // Remove char
        this.setState((prevState) => {
          return { txt: fullTxt.substring(0, prevState.txt.length - 1) };
        });
      } else {
        // Add char
        this.setState((prevState) => {
          return { txt: fullTxt.substring(0, prevState.txt.length + 1) };
        });
      }
      let typeSpeed = 250;
      if (this.state.isDeleting) {
        typeSpeed /= 2;
      }
      // If word is complete
      if (!this.state.isDeleting && this.state.txt === fullTxt) {
        // Make pause at end
        typeSpeed = this.state.wait;
        // Set delete to true
        // this.setState({ isDeleting: true });
      } else if (this.state.isDeleting && this.state.txt === "") {
        this.setState({ isDeleting: false });
        // Move to next word
        this.setState((prevState) => {
          return { wordIndex: prevState.wordIndex + 1 };
        });
        // Pause before start typing
        typeSpeed = 500;
      }
      setTimeout(() => this.type(), typeSpeed);
    }
  }
  render() {
    console.log(this.state.txt);
    return <span>{this.state.txt}</span>;
  }
}

export default TypeWriter;
