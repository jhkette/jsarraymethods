import React, { Component } from "react";
import ShowCode from './components/ShowCode'
import Options from './components/Options'
import "./App.css";

class App extends Component {
 
  render() {
    return (
      <div className="App">
       <ShowCode />
       <Options />
      </div>
    )
  }
}


export default App;
