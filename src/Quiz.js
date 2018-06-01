import React, { Component } from 'react';
import Question from "./Question";
import GameOver from "./GameOver";
import QUESTIONS from './data'

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
      qCount: QUESTIONS.length,
      answers: [],
      gameOver: false,
    }

    this.handleAnswer = this.handleAnswer.bind(this);
  }

  handleAnswer(inc) {
    const nextQuestionIdx = this.state.currentQuestion + 1;
    const answers = [...this.state.answers, inc];
    const currentQuestion = nextQuestionIdx;
    const gameOver = nextQuestionIdx === this.state.qCount
    this.setState({ answers, currentQuestion, gameOver }, () => console.log(this.state));
  }

  render() {
    return (
      <div>
        {this.state.gameOver ? <GameOver hindsight={ {questions: QUESTIONS, answers: this.state.answers } }/> :
          <Question handleAnswer={this.handleAnswer} data={QUESTIONS[this.state.currentQuestion]} />
        }
      </div>
    );
  }
}

export default Quiz;