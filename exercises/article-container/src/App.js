import React, { Component } from "react";
import "./App.css";
import Container from "./components/stateless/container";


const Red = {
  
  opacity: .3
}


class App extends Component {
  render() {
    return (
      <main>
        <Container />
        <Container />
        <Container style={{backgroundColor: '#f56'}}/>
      </main>
    );
  }
}

export default App;
