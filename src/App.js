import React, { Component } from 'react';
import './App.css';
import Child from './components/parentToChild/child'

class App extends Component {
  state = {
    title: "Placeholer Title"
  }

  changeTheWorld = (newTitle) => {
    this.setState({ title: newTitle });
  }

  render() {
    return (
      <div className="App">
        <Child doWhatever={this.changeTheWorld.bind(this, "New World")} title={this.state.title} />
      </div>
    );
  }
}


export default App;