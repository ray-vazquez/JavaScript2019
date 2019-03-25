import React, { Component } from 'react';
import './assets/DisplayResults'
import Address from './components/Address/Address';
import DisplayResults from './assets/DisplayResults';

class App extends Component {

  state = {
    firstName: "",
    lastName: "",
    addressLine1: "",
    city: "",
    state: "",
    postalCode: "",
    ZipCode: "",
    country: ""
  };

  set = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handelSubmit = e => {
    e.preventDefault();
    this.setState({ submit: true })
  }

  handelStateChange = e => this.setState({ state: e.target.value });
  handelCountryChange = e => this.setState({ country: e.target.value });

  render() {
    return (
      <div className="App">
        <Address 
          
        />

        <DisplayResults 
          submit={this.handelSubmit}
        />
      </div>
    );
  }
}

export default App;
