import React from 'react';
import './MyButton.css';

const MyButton = ({ label = "Click Me", onClick }) => {
  return (
    <button className="my-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default MyButton;
