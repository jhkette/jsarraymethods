import React, { Component } from "react";
import { getData } from "./data/data";

import "./App.css";

class App extends Component {
  async componentDidMount() {
    const x = await getData();
    console.log(x);
  }

  render() {
    return (
      <div className="App">
        <h1>Hi there</h1>
      </div>
    );
  }
}

export default App;
