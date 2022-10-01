import React from 'react';

const Child = (props) => {
    console.log(props);
    
    return(
        <div>
            <div>My name is {props.name}</div>
            <button onClick={props.getMyAge}>show my age</button>
        </div>
    )
}

export default Child;