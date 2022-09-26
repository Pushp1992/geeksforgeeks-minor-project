import React, { Component } from 'react';


class Parent extends Component {
    render() {
        const childInfo = {
            name: 'simran',
            city: 23,
            state: 'MP',
        };

        return (
            <>
            <h4>Passing props form parent to child</h4>
               <Child {...childInfo} />
            {/* <Child name='raj' city='delhi' /> */}
            </>
        )
    }
};

class Child extends Component {
    render() {
        return (
            <div>
                <span>My Name is {this.props.name} </span> <br/>
                <span>I live in {this.props.city} </span>
                <span>My state is : {this.props.state}</span>
            </div>
        )
    }
}

export default Parent;


// state >> read/write and mutable
// props >> they are read only (immutable) // something wich can not be breaked / change

