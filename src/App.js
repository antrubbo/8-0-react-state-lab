import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      currentScore: 0,
      incrementor: 1
    }
  }

  handleIncreaseScore = () => {
    this.setState({
      currentScore: this.state.currentScore + this.state.incrementor
    })
  }

  handleIncreaseIncrementor = () => {
    if(this.state.currentScore >= 10){
      this.setState({
        currentScore: this.state.currentScore - 10,
        incrementor: this.state.incrementor + 1
      })
    } else {
      alert("You can't afford that!")
    }
  }

  handlePlayAgain = () => {
    this.setState({
      currentScore: 0,
      incrementor: 1
    })
  }

  render() {
    const {currentScore, incrementor} = this.state

    return (
      <main>
        <h2>Current Score: {currentScore}</h2>
        <button style={currentScore >= 100 ? {display: "none"} : null} onClick={this.handleIncreaseScore}>+{incrementor}</button>
        <br /><br />
        <button style={currentScore >= 100 ? {display: "none"} : null} onClick={this.handleIncreaseIncrementor}>Pay 10 points to change from +{incrementor} to +{incrementor + 1}</button>
        <h2 style={currentScore <= 99 ? {display: "none"} : null}>You Win!</h2>
        <button style={currentScore <= 99 ? {display: "none"} : null} onClick={this.handlePlayAgain}>Play Again?</button>
      </main>
    );
  }
}

export default App;
