import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quiz from './Quiz'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      started: false
    }
    this.start = this.start.bind(this);
  }
  start() {
    this.setState({ started: true })
  }
  render() {
    return (
      <div className="App">
       <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Quiz</h1>
        </header>
        { 
        this.state.started ? <Quiz/> : 
          <p onClick={this.start}>
            Starta quizkampen!!!
          </p> 
        }
      </div>
    );
  }
}

export default App;
