import React from 'react';
import '../stylesheets/App.css';

const Button = (props) => {
  return (
    <button class="btn btn-outline-success btn-lg" onClick={props.call}>
        Click here.
    </button>
  );
}

export default Button