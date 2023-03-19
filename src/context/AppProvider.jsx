import { useState, useEffect } from 'react'
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

    // const [listHabit, setListHabit] = useState([
    //     {
    //         "id": 3,
    //         "name": "Acordar",
    //         "done": true,
    //         "currentSequence": 1,
    //         "highestSequence": 1
    //     },

    //     {
    //         "id": 4,
    //         "name": "Banhar",
    //         "done": false,
    //         "currentSequence": 3,
    //         "highestSequence": 3
    //     },
    // ])

    const [listHabit, setListHabit] = useState([]) 

//     useEffect( () => {
//         //Calcular a porcentagem 
//         listHabit.map((habit) => {
//         //    console.log(habit.done)
//            if (habit.done) {
//                setDone(done + 1)
//            }
//        }
//        )
//        const auxPercentage = (done / listHabit.length) * 100;
//        setPercentage(auxPercentage);
//    }, [done, listHabit])

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