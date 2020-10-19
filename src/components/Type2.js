import React, { Component } from "react";

class TypeWriter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      complete: "",
      txt: "",
      wordIndex: 0,
      wait: parseInt(1000, 10),
    };
  }

  componentDidMount() {
    this.type();
  }

  timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async type() {
    // Current index of word
    if (this.props.dataTxt) {
      if (this.state.complete == "") {
        await this.timeout(300)
        this.setState({ complete: this.props.dataTxt });
      } else if (this.state.complete != this.props.dataTxt) {
        this.setState({ isDeleting: true });
        if (this.state.txt === "") {
          this.setState({ complete: this.props.dataTxt });
          this.setState({ isDeleting: false });
        }
      }

      // Get full text of current word
      const fullTxt = this.state.complete;
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
      let typeSpeed = 100;
      if (this.state.isDeleting) {
        typeSpeed /= 2;
      }

      setTimeout(() => this.type(), typeSpeed);
    }
  }
  render() {
    return <span className="txt">{this.state.txt}</span>;
  }
}

export default TypeWriter;
