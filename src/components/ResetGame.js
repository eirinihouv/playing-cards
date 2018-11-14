import React from 'react';
import { connect } from 'react-redux';
import { resetGame } from '../models/poker';
import ResetButton from './ResetButton';

const ResetGame = ({ onResetClick }) => (
    <ResetButton onClick={() => onResetClick()} />
);

const mapDispatchToProps = dispatch => ({
  onResetClick: () => {
    dispatch(resetGame());
  }
});

export default connect(undefined, mapDispatchToProps)(ResetGame);