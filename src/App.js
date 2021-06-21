import React, { Component } from "react";
import ShowCode from "./components/ShowCode";
import Options from "./components/Options";
import Actions from "./components/Actions";
import Info from "./components/Info";
import TopBar from "./components/Topbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <TopBar />
        <div className="App">
          <h1>Array Method Tool</h1>
          <p className="intro">An array methods explorer made using React. Somewhat inspired by another site made in
            Vue. </p>
          <Actions />
          <Options />
          <div className="results-container">
            <Info />
            <ShowCode />
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
