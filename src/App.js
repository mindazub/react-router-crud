import React, { Component } from "react";

type TestProps = {
  str: string,
  num?: number,
  ary: Array<number>
};

type TestState = {
  message: string
};

class Test extends Component<TestProps> {
  state = {
    message: "hello"
  };

  static defaultProps = {
    str: "mindaugas"
  };
  p:? HTMLBodyElement;

  render() {
    return (
      <div className="Test">
        <p>{this.props.str}</p>
        <p>{this.props.num}</p>
        <p>{this.props.ary.map(val => val)}</p>
        <p ref={p => (this.p = p)}>{this.state.message}</p>
      </div>
    );
  }
}

class App extends Component<{}> {
  render() {
    return (
      <div className="App">
        <Test ary={[1, 2, 3]} />
      </div>
    );
  }
}

export default App;
