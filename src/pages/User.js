import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const User = () => {

    const {userName, info, toggleInfo} = useContext(UserContext)

    return (
        <>
            <div className="user-sec">
                <h1>Welcome - {userName}</h1>
                <div className="user-data">
                    <button onClick={toggleInfo}>{info ? 'Hide' : 'Show'} Personal Detail</button>
                    <div className={`${info ? 'user-data-inner' : 'user-data-out'}`}>
                        <p>Full Name: John Doe</p>
                        <p>Email: johndoe@yahoo.com</p>
                        <p>Contact: 123-456-7890</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User;