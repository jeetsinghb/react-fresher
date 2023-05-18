import React from "react";
import User from "./User";
import UserContextProvider from "../contexts/UserContext";

const Dashboard = () => {
    return (
        <>
            <div className="dasboard">
                <div className="container">
                    <h1>Dashboard</h1><br/><hr /><br/>
                    <UserContextProvider>
                        <User />
                    </UserContextProvider>
                </div>
            </div>
        </>
    )
}

export default Dashboard;