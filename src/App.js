import React, { Component } from "react";
import Child from "./components/parentToChild/Child";

class App extends Component {
  state = {
    name: "Peter"
  };

  constructor(props) {
    super(props);
    this.state = {
      name: "John"
    };
    console.log("constructor");
  }

  componentWillMount() {
    if (window.innerWidth < 500) {
      this.setState({ innerWidth: window.innerWidth });
    }

    console.log("Component will mount");
  }

  componentDidMount() {
    console.log("component did mount");
  }

  componentWillReceiveProps() {
    console.log("componentWillReceiveProps");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentWillUpdate() {
    console.log("componentWillUpdate, no to setState here!");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("CHILD prevProps", prevProps);
    console.log("CHILD prevState", prevState);
    console.log("CHILD componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  changeState() {
    this.setState({ name: "Joe" });
  }

  unmountChild(){
    this.setState({name: 'Robert Unmount'});
  }

  render() {
    console.log("render");
    if(this.state.name === 'Robert Unmount'){
      return(<div/>);
    }
    return (
      <div className="App">
        name: {this.state.name} | innerWIdth: {this.state.innerWidth}
        <Child name={this.state.name} />
        <button onClick={this.changeState.bind(this)}>Change State</button>

        <button onClick={this.unmountChild.bind(this)}>Unmount CHILD</button>
      </div>
    );
  }
}

export default App;
