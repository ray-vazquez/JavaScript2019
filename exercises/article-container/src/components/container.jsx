import React from "react";
import '../App.css'


function Container (props) {
  return (
    <div className="content-wrap">
      <h1>{props.heading}</h1>
      <img {...props} />
      <p>{props.description}</p>
    </div>
  );
};

export default Container;
