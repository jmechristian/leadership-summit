import React, { Component } from "react";
import "./resources/styles.css";
import Header from "./components/layout/Header";
import Featured from "./components/featured/Featured";

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{ height: "1500px", backgroundColor: "blue" }}
      >
        <Header />
        <Featured />
      </div>
    );
  }
}

export default App;
