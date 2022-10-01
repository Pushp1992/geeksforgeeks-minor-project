import React from 'react';
import Form from './form/form';
import ParentProp from './using-props/parent';
import {AddNumber} from './hooks/state-effect-hooks';
import {ContextHook} from './hooks/use-context/context-hook'
import AnimalCallback from './hooks/useCallback';
import {Memo} from './hooks/use-memo';
import HOCParent from '../functional-component/hoc';
import './style.css';

const FunctionalComponent = () => {
    return (
        <React.Fragment>
            <div className='parentwrapper'>
                <h5> All functional component will be present inside this parent component</h5>
              <HOCParent />
            </div>
        </React.Fragment>
    )
}

export default FunctionalComponent;
