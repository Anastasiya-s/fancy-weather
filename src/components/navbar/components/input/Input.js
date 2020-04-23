import React from 'react';

const Input = ({ onInputChange }) => (
  <input onChange={(e) => onInputChange(e.target.value)}/>
); 

export default Input;