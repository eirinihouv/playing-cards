import React from 'react';

const CheckBoxCard = ({ card, handleChecked }) => {
  const rand = Math.floor(Math.random() * 10);
  return (
    <label htmlFor={card.weight + rand} className={`card rank-${card.rank} ${card.suit}`}>
      <span className="rank">{card.rank}</span>
      <span className="suit"></span>
      <input 
        type="checkbox" 
        id={card.weight + rand} 
        name={card.weight + rand} 
        onChange={handleChecked} 
      />
    </label>
  );
};

export default CheckBoxCard;