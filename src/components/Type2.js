import React, { Component } from "react";

class TypeWriter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      txt: "",
      wordIndex: 0,
      wait: parseInt(1000, 10),
      isDeleting: false,
    };
  }
  componentDidUpdate() {
    // this.type();
  }
  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words;
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    let typeSpeed = 300;
    if (this.isDeleting) {
      typeSpeed /= 2;
    }
    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }
    setTimeout(() => this.type(), typeSpeed);
  }
  render(){
   console.log(this.props.dataTxt)
   return (
    <span>{this.props.dataTxt}</span>
   )
  }
}

export default TypeWriter;
