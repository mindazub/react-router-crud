import React, { Component } from "react";
import User from "./User";

class Users extends Component {
  state = {
    users: [
      { name: "John", age: 20 },
      { name: "Jill", age: 30 },
      { name: "Peter", age: 40 }
    ],
    title: "Users List"
  };

  makeUserYounger = () => {
      console.log("clicked.");
      this.setState({
        users: [
            { name: "John", age: 10 },
            { name: "Jill", age: 20 },
            { name: "Peter", age: 30 }
          ],
      })
  }

  render() {
    return (
      <div>
          <button onClick={this.makeUserYounger}>Make Us 10 Years Younger</button>
          <br />
        <h1>{this.state.title}</h1>
        <User age={this.state.users[0].age}>{this.state.users[0].name}</User>
        <User age={this.state.users[1].age}>{this.state.users[1].name}</User>
        <User age={this.state.users[2].age}>{this.state.users[2].name}</User>
      </div>
    );
  }
}

export default Users;
