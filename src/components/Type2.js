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
  // this timeout function returns a promise that can be awaited
  // this can be used as a 'sleep', or delay function
  timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async type() {
    // Current index of word
    if (this.props.dataTxt) {
      if (this.state.complete === "") {
        // use this timeout to pause  typing initially
        await this.timeout(500)
        // set the 'complete' text 
        this.setState({ complete: this.props.dataTxt });
      } 
      // if this.state.complete !== this.props.dataTxt ie if there is a new
      // dataTxt this isDeleting: true
      else if (this.state.complete !== this.props.dataTxt) {
        this.setState({ isDeleting: true });
        // if this.state.txt === '' set complete to this.props.dataTxt 
        // set this isdeleting == false
        if (this.state.txt === "") {
          this.setState({ complete: this.props.dataTxt });
          this.setState({ isDeleting: false });
        }
      }

      // Get full text of current word
      const fullTxt = this.state.complete;
      // if this.state.isDeleting remove chars from this.state.txt
      if (this.state.isDeleting) {
        // Remove char
        this.setState((prevState) => {
          return { txt: fullTxt.substring(0, prevState.txt.length - 1) };
        });
      } else {
        // if !this.state.isDeleting add chars to this.state.txt
        // Add char
        this.setState((prevState) => {
          return { txt: fullTxt.substring(0, prevState.txt.length + 1) };
        });
      }
      let typeSpeed = 100;
      // increase typespeed if deleting
      if (this.state.isDeleting) {
        typeSpeed /= 3;
      }
      // call this.type with a timeout function - typespeed is set above
      setTimeout(() => this.type(), typeSpeed);
    }
  }
  // rendeer text - renders this.state.txt - as shown above this state value
  // is changed by this.type method
  render() {
    return <span className="txt">{this.state.txt}<div id="cursor"></div></span>;
  }
}

export default TypeWriter;
