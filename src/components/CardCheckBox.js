import React from 'react';

const CardCheckBox = ({ type, id, name, onChange }) => (
  <input type={type} id={id} name={name} onChange={onChange} />
);

export default CardCheckBox;