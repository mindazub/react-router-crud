import React, { Component } from 'react';
import User from './User';
class Users extends Component {
    state = {
        users: [
            { name: "John", age: 20 },
            { name: "Jill", age: 30 },
            { name: "Peter", age: 40 },
        ],
        title: "Users List"
    };

    makeUsYounger = () => {
        console.log("get younger, people!");


        const newState = this.state.users.map((user)=> {
            const tempUser = user;
            tempUser.age -= 10;
            return tempUser;
        });

        this.setState({
            newState
        });
    }

    render() {
        return (<div>
            <button onClick={this, this.makeUsYounger}>Make Us Younger By 10 Years</button>
            <h1>{this.state.title}</h1>
            <User age={this.state.users[0].age}>{this.state.users[0].name}</User>
            <User age={this.state.users[1].age}>{this.state.users[1].name}</User>
            <User age={this.state.users[2].age}>{this.state.users[2].name}</User>
        </div>)
    }


}

export default Users;