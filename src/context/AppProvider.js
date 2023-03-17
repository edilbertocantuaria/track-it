import { useState } from 'react'
import { AppContext } from './AppContext'

export default function AppProvider({ children }) {
    const [userImage, setUserImage] = useState("");
    const [username, setUsername] = useState("");

    return (
        <AppContext.Provider
            value={{
                userImage, setUserImage,
                username, setUsername
            }}>
            {children}
        </AppContext.Provider>
    )
}