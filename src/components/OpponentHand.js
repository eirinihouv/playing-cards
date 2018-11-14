import React from 'react';
import { connect } from 'react-redux';
import Cards from './Cards';
import HandRate from './HandRate';

const OpponentHand = ({ opponent }) => (
  <div>
    <Cards cards={opponent.cards} />
    <HandRate cards={opponent.cards} />
  </div>
  
);
  
const mapStateToProps = ({ opponent }) => ({ opponent });

export default connect(mapStateToProps)(OpponentHand);