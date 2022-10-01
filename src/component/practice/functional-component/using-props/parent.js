import React from 'react';
import Child from './child';

const ParentProp = () => {

    // const getAge = () => {
    //     console.log('I am 40 years old');
    // }

    const obj = {
        name: 'raj',
        getMyAge: function() {
            console.log('I am 40 years old');
        }
    };

    return(
        // <Child name="raj" getMyAge={getAge} />
        <Child  {...obj} />
    )
}



export default ParentProp;