import React, { Component } from 'react';
import IsLoggedIn from './components/isLoggedIn';

class App extends Component {
  render() {
    const Users = [
     
    ];
    return (
      <div className="App">
        <IsLoggedIn Users={Users} />
      </div>
    );
  }
}

export default App;
