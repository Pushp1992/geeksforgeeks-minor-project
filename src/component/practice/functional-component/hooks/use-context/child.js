// consuming parent data uisng useContext

import React, {useContext} from 'react';
import NameContext from './index';


const Child = () => {
    const result  = useContext(NameContext);
    return (
        <h3>Welcome to {result} </h3>
    )
}

export default Child;