import React, { useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";

const Counter = () => {

    const {count, increaseCount, decreaseCount} = useContext(CounterContext)

    return (
        <>
            <div className="counter-sec">
                <button onClick={decreaseCount}>-</button>
                <span>{count}</span>
                <button onClick={increaseCount}>+</button>
            </div>
        </>
    )
}

export default Counter;