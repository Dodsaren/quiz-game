import React, { Component } from 'react';
import './GameOver.css';

class GameOver extends Component {
  render() {
    const { questions, answers } = this.props.hindsight;
    const corrects = questions.reduce((prev, curr, idx) => 
      curr.a === answers[idx] ? prev + 1 : prev, 0);
    const total = questions.length;
    console.log(corrects);
    return (
      <div>
        <section>
          Spelet är över, grymt bra jobbat, ditt resultat ({corrects}/{total}):
        </section>
        { questions.map((q, i) => {
          const res = q.a === answers[i] ? 'right' : 'wrong';
          return(
            <section key={i} className={res}>
              <h3>{q.q}</h3>
              <div>
                Ditt svar: <span>{answers[i]}</span> | Rätt svar <span>{q.a}</span>
              </div>
            </section>
          )
        }) }
      </div>
    );
  }
}

export default GameOver;