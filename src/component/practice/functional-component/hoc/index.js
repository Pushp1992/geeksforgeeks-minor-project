import React, { Component } from 'react';
import Hoc from './hoc-component';


class HOCParent extends Component {
    render() {
        return (
            <div>
                <h2>Hello World!!</h2>
                <p> Have a Great day.</p>
            </div>
        )
    }
}


HOCParent = Hoc(HOCParent);
export default HOCParent;
