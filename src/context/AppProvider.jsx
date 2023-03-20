import { useState } from 'react'
import { AppContext } from './AppContext'

export default function AppProvider({ children }) {
    const [userImage, setUserImage] = useState("");
    const [username, setUsername] = useState("");
    const [token, setToken] = useState("");

    const [percentage, setPercentage] =useState(0);
    const [done, setDone] = useState(0)
    const [habitsDescription, setHabitsDescription] = useState([])

    const [disableInputs, setDisableInputs] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [listHabit, setListHabit] = useState([]) 

    return (
        <AppContext.Provider
            value={{
                userImage, setUserImage,
                username, setUsername,
                token, setToken,
                percentage, setPercentage,
                done, setDone,
                habitsDescription, setHabitsDescription,
                disableInputs, setDisableInputs,
                isLoading, setIsLoading,
                listHabit, setListHabit
            }}>
            {children}
        </AppContext.Provider>
    )
}