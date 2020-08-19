import React, { Component } from "react";
import ShowCode from "./components/ShowCode";
import Options from "./components/Options";
import Actions from "./components/Actions";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Array Method explorer</h1>
        <Actions />
        <Options />
        <ShowCode />
      </div>
    );
  }
}

export default App;
