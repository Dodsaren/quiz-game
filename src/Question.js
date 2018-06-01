import React, { Component } from 'react';
import './Question.css';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      showButton: false
    };
    
    this.select = this.select.bind(this);
    this.answer = this.answer.bind(this);
  }

  answer() {
    this.setState({ showButton: false }, this.props.handleAnswer(this.state.selected));
  }

  select(o) {
    this.setState({ selected: o, showButton: true });
  }

  render() {
    const { q } = this.props.data;
    const options = this.props.data.o;
    return (
      <div>
        <h2>
          { q }
        </h2>
        <ul>
          {options.map((o, i) => 
            <li key={i}>
              <div className={this.state.selected === o ? 'selected' : undefined} onClick={() => this.select(o)}>{o}</div>
            </li>
          )}
        </ul>
        {this.state.showButton && <button onClick={this.answer}>NEESTA</button>}
      </div>
    )
  }
}

export default Question;