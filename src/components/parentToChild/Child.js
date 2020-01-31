import React, { Component } from "react";

class Child extends Component {
  constructor() {
    super();

    console.log("CHILD constructor");
  }

  componentWillMount() {
    console.log("CHILD Component will mount");
  }

  componentDidMount() {
    console.log("CHILD component did mount");
  }

  componentWillReceiveProps() {
    console.log("CHILD componentWillReceiveProps");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("CHILD shouldComponentUpdate");
    return true;
  }

  componentWillUpdate() {
    console.log("CHILD componentWillUpdate");
  }

  componentWillUnmount() {
    console.log("CHILD componentWillUnmount");
  }

  render() {
    console.log("CHILD render");

    return <div className="App">Child Name: {this.props.name}</div>;
  }
}

export default Child;
