import React, { useState, useMemo } from "react";

export const Memo = () => {
    const [number, setNumber] = useState(0);
    const [todos, setTodos] = useState([]);
    // const calculation = expensiveCalculation(number);
    
    const calculation = useMemo(() => expensiveCalculation(number), [number]);

    const increment = () => {
        setNumber((number) => number + 1);
    };
    const addTodo = () => {
        setTodos((item) => [...item, "New Todo"]);
    };

    return (
        <div>
            <div>
                <h2>My Todos</h2>
                {todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>;
                })}
                <button onClick={addTodo}>Add Todo</button>
            </div>
            <hr />
            <div>
                number: {number}
                <button onClick={increment}>+</button>
                <h2>Expensive Calculation</h2>
                {calculation}
            </div>
        </div>
    );
};

const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num;
};
