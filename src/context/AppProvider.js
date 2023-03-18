import { useState } from 'react'
import { AppContext } from './AppContext'

export default function AppProvider({ children }) {
    const [userImage, setUserImage] = useState("");
    const [username, setUsername] = useState("");
    const [token, setToken] = useState("");

    const [percentage, setPercentage] =useState(0);
    const [numHabits, setNumHabits] = useState(0)

    const [disableInputs, setDisableInputs] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <AppContext.Provider
            value={{
                userImage, setUserImage,
                username, setUsername,
                token, setToken,
                percentage, setPercentage,
                numHabits, setNumHabits,
                disableInputs, setDisableInputs,
                isLoading, setIsLoading
            }}>
            {children}
        </AppContext.Provider>
    )
}