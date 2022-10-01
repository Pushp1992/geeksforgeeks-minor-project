import React, { useState, useEffect } from 'react';

export const AddNumber = () => {

    const [firstNum, setFirstNum] = useState('');
    const [secondNum, setSecondNum] = useState('');


    useEffect(() => {
        addNumber();
    },[secondNum]);


    const addNumber = () => {
        // e.preventDefault();

        console.log('tetststs');

        // setSecondNum(secondNum + 1) // infiite rendering
        console.log(firstNum + secondNum)

    };

    function handleFirstNumChange(e) {
        e.stopPropagation();
        const {value} = e.target;
        setFirstNum(Number(value))
    };

    function handleSecondNumChange(e) {
        e.stopPropagation();

        const {value} = e.target;
        setSecondNum(Number(value))
    };

    return (
        <>
            <input type='number' name='firstNum' value={firstNum} onChange={handleFirstNumChange} /> <br /><br/>
            <input type='number' name='secondNum' value={secondNum} onChange={handleSecondNumChange} /> <br />
            <button onClick={addNumber}>Add</button>
        </>
    )
}