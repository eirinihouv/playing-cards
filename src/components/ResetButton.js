import React from 'react';

const ResetButton = ({ onClick }) => (
  <button className="reset" onClick={onClick}>
    New Game
  </button>
);

export default ResetButton;