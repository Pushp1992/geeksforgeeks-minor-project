import React, { Component } from 'react';

class Person extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.name = React.createRef();
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.name.current.valuee);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                 <h4>** How to work with uncontrolled component</h4>
                <label>
                    Name: <input type="text" ref={this.name} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}


export default Person;

// controlled component  >> is a part of react and it helps in proper biding and controlling of react app (complete ownership)

// uncontrolled component >> controlled by browser