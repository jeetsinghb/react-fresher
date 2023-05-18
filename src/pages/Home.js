import React from "react";
import Counter from "./Counter";
import CounterContextProvider from "../contexts/CounterContext";

const Home = () => {
    return (
        <>
            <div className="homepage">
                <div className="container">
                    <h1>Home Page</h1>
                    <br /><hr /><br />
                    <CounterContextProvider>
                        <Counter />
                    </CounterContextProvider>
                </div>
            </div>
        </>
    )
}

export default Home;