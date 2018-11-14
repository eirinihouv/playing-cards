import React from 'react';
import { connect } from 'react-redux';
import Cards from './Cards';
import HandRate from './HandRate';

const Hand = ({ players }) => (
    players.map(
      player => (
        <div>
          <Cards cards={player.cards} />
          <HandRate cards={player.cards} />
        </div>
      )
    )
);
  
    
const mapStateToProps = ({ players }) => ({ players });

export default connect(mapStateToProps)(Hand);