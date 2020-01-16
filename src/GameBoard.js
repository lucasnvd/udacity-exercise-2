import React, { Component } from 'react';

import ResultInput from "./ResultInput"

class GameBoard extends Component {
  state = {
    correctAnswers: 0,
    round: 1,
  };

  computeScore = () => {
    const {correctAnswers, round} = this.state;
    return (correctAnswers / round);
  };

  handleAnswer = (isRight) => {
    this.setState(({correctAnswers, round}) => {
      return {
        correctAnswers: isRight ? correctAnswers + 1 : correctAnswers,
        round: round + 1,
      };
    });
  };
  
  render() {
    const {round} = this.state;
    return (
      <div>
        <ResultInput key={round} onChoice={this.handleAnswer}/>
      	<p>Your score: {this.computeScore()}</p>
      </div>
    );
  }
}

export default GameBoard;