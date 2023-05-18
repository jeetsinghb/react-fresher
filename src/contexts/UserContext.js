import { createContext, useState } from "react";

export const UserContext = createContext()

const UserContextProvider = (props) => {

    const [info, setInfo] = useState(false)

    const toggleInfo = () => {
        setInfo(prevInfo => !prevInfo)
    }

    const userName = "John Doe";

    return (
        <>
            <UserContext.Provider value={{userName, info, toggleInfo}}>
                {props.children}
            </UserContext.Provider>
        </>
    )
}

export default UserContextProvider;