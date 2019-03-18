import React, { Component } from "react";
import "./Address.css";
import countries from "../../assets/countries";
import states from "../../assets/states";
// Import data from "assets/countries.js" and "assets/states.js" here

class Address extends Component {
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

  set = (field, value) => {
    this.setState({ [field]: value });
  };

  handelStateChange = e => this.setState({ state: e.target.value });
  handelCountryChange = e => this.setState({ country: e.target.value });

  render() {
    return (
      <form className="container mt-4">
        <div className="form-group">
          <label htmlFor="firstName" className="control-label">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            className="form-control"
            value={this.state.firstName}
            onChange={e => this.set("firstName", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName" className="control-label">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            className="form-control"
            value={this.state.lastName}
            onChange={e => this.set("lastName", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="addressLine1" className="control-label">
            Address Line 1
          </label>
          <input
            id="addressLine1"
            name="addressLine1"
            type="text"
            className="form-control"
            value={this.state.addressLine1}
            onChange={e => this.set("addressLine1", e.target.value)}
          />
          <p className="help-block text-muted">
            Street address, P.O. box, company name, c/o
          </p>
        </div>
        <div className="form-group">
          <label htmlFor="city" className="control-label">
            City / Town
          </label>
          <input id="city" name="city" type="text" className="form-control" value={this.state.city}
            onChange={e => this.set("city", e.target.value)}

            />
        </div>

        <div className="form-group">
          <label htmlFor="state" className="control-label">
            State / Province / Region
          </label>

          <select
            id="state"
            name="state"
            className="form-control"
            value={this.state.state}
            onChange={e => this.set("state", e.target.value)}
          >
            {states.map((item, index) => (
              <option key={"state-" + (index + 1)} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="postalCode" className="control-label">
            Zip / Postal Code
          </label>
          <input
            id="postalCode"
            name="postalCode"
            type="text"
            className="form-control"
            value={this.state.postalCode}
            onChange={e => this.set("postalCode", e.target.value)}
            
          />
        </div>

        <div className="form-group">
          <label htmlFor="country" className="control-label">
            Country
          </label>

          <select
            id="country"
            name="country"
            className="form-control"
            value={this.state.country}
            onChange={e => this.set("country", e.target.value)}

            >
            {countries.map((item, index) => (
              <option key={"item-" + (index + 1)} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        {/*
         * Find a way to only display this once the form has been submitted.
         * Hint: You will need to change this "this.condtion" below to something else
         */}
        {this.condition && (
          <div className="card card-body bg-light mt-4 mb-4">
            Results:
            <ul className="list-unstyled mb-0">
              {/* Add <li></li> tags here */}
            </ul>
          </div>
        )}
      </form>
    );
  }
}

export default Address;
