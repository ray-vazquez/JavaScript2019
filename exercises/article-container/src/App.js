import React, { Component } from "react";
import "./App.css";
import Container from "./components/container";
import './'
class App extends Component {
  render() {
    return (
      <main>
        <Container
        heading="Bacon"
        src='https://picsum.photos/g/300/200?random'
        alt="random photo" 
        description="Bacon ipsum dolor amet andouille brisket picanha bresaola hamburger"
        />
        <Container
        heading="Cat"
        src='https://picsum.photos/300/200?random'
        alt="random photo" 
        description="Present belly, scratch hand when stroked more napping, more napping all the napping is exhausting wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again so furrier and even more furrier hairball."
        />
        <Container
        heading="Dog"
        src='https://picsum.photos/300/200'
        alt="random photo" 
        description="Husky bring it release st bernard leash shake leash peanut butter, bite come shake poodle doberman pinscher fetch."
        />
       
      </main>
    );
  }
}

export default App;
