// consume created context and created child

import React from 'react';
import NameContext from './index';
import Child from './child';

export const ContextHook = () => {

    return(
        <NameContext.Provider value="hello India">
            <Child />
        </NameContext.Provider>
    )
}
