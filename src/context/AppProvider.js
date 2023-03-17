import { useState } from 'react'
import { AppContext } from './AppContext'

export default function AppProvider({ children }) {
    const [userImage, setUserImage] = useState("");
    const [username, setUsername] = useState("");
    const [percentage, setPercentage] =useState(0);

    return (
        <AppContext.Provider
            value={{
                userImage, setUserImage,
                username, setUsername,
                percentage, setPercentage
            }}>
            {children}
        </AppContext.Provider>
    )
}