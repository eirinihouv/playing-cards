import React from 'react';
import { connect } from 'react-redux';
import { newGame } from '../models/poker';
import ResetButton from './ResetButton';

const NewGame = ({ onResetClick }) => (
    <ResetButton onClick={() => onResetClick()} />
);

const mapDispatchToProps = dispatch => ({
  onResetClick: () => {
    dispatch(newGame());
  }
});

export default connect(undefined, mapDispatchToProps)(NewGame);