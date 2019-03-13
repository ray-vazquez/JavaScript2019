import React, { Component } from "react";

class IsUserLoggedIn extends Component {
  

  render() { 
    return ( 
      <div className="App">
      <ul>
        {
        this.props.Users.map((user, index ) => {
        return <li key={"user-" + index}>{user.name}: {user.isUserLoggedIn ? " is logged in" : " is logged out"} </li>
        
        })  
        }
        </ul>
    </div>
    );
  }
}
 
export default IsUserLoggedIn;