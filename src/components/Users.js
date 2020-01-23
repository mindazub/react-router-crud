import React, { Component } from 'react';
import User from './User';
class Users extends Component {
    state = {
        users: [
            { name: "John", age: 20 },
            { name: "Jill", age: 30 },
            { name: "Peter", age: 40 },
            { name: "Mage", age: 80 },
            { name: "Almys", age: 100 },
        ],
        title: "Users List"
    };

    makeUsYounger = () => {
        console.log("get younger, people!");


        const newState = this.state.users.map((user) => {
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
            {
                this.state.users.map((user) => {
                    return <User age={user.age}>{user.name}</User>
                })
            }
        </div>)
    }


}

export default Users;