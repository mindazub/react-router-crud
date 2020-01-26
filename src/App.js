import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    name: "Nice Tutorial"
  }

  changeState = (newName) => {
    this.setState(
      {
        name: newName
      }
    )
  }

  changeStateFromInput = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return (
      <div>
        <br /> <br />
        <button onClick={()=>this.changeState("Anonymous function name change")}>Change state Using Anonymous function</button>
        <button onClick={this.changeState.bind(this, "Passed from Bind")}>Change state Using Bind</button>
        <br /> <br />
        <input type="text" onChange={this.changeStateFromInput} value={this.state.name} />
        <br /> <br />
        <div>{this.state.name}</div>
      </div>
    );
  }
}


export default App;