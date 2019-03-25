import React from 'react';

const DisplayResults = (props) => {
  return (
    <div>
      <li>{props.firstName}</li>
      <li>{props.lastName}</li>
      <li>{props.address}</li>
    </div>
  );
};

export default DisplayResults