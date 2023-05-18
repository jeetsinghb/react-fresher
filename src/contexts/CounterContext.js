import { createContext, useState } from "react";

export const CounterContext = createContext();

const CounterContextProvider = (props) => {

    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount(prevCount => prevCount + 1)
    }

    const decreaseCount = () => {
        setCount(prevCount => prevCount - 1)
    }

    return (
        <>
            <CounterContext.Provider value={{count, increaseCount, decreaseCount}}>
                {props.children}
            </CounterContext.Provider>
        </>
    )
}

export default CounterContextProvider;