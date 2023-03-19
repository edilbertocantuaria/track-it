import styled from "styled-components";
import { useState, useEffect, React } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import addHabitsButton from "../assets/addHabitsButton.png"
import trashIcon from "../assets/trashIcon.png"

import weekdays from "../helpers/weekdays";
import Header from "../components/HeaderRender"
import Menu from "../components/MenuRender"
import useAppContext from '../hook/useAppContext'

import axios from "axios"
import { ThreeDots } from "react-loader-spinner";

export default function HabitsPage() {
    const [habit, setHabit] = useState("");
    const [disableSomeInputs, setSomeDisableInputs] = useState(true);

    const [list, setList] = useState([]);
    const [daysSelected, setDaysSelected] = useState([]);

    const [showCreateHabit, setShowCreateHabit] = useState("none");
    const [save, setSave] = useState("Salvar")

    const { percentage, setPercentage,
        token,
        habitsDescription, setHabitsDescription,
        disableInputs, setDisableInputs,
        isLoading, setIsLoading } = useAppContext()

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
        request.then(response => {
            setHabitsDescription(response.data);
        });

    },
        [list])

    function listingHabits() {
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
        request.then(response => {
            setHabitsDescription(response.data);
        });
        request.catch(error => {
            console.log(error);
        })



        if (habitsDescription.length === 0) {
            return (
                <div>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</div>
            )
        } else {


            return (
                <>
                    {habitsDescription.map((habit) =>
                        <HabitList
                            key={habit.id}
                            data-test="habit-container">
                            <div className="listingHabit">
                                <div className="habitWrapper">
                                    <img
                                        src={trashIcon}
                                        className="trashHabit"
                                        title="excluir hábito"
                                        onClick={() => deleteHabit({ habit })}
                                        data-test="habit-delete-btn" />
                                </div>
                                <div className="habitDescription" data-test="habit-name">{habit.name}</div>
                                <div className="weekdays">
                                    {weekdays.map((day, i) =>
                                        <DaysButton
                                            disabled={disableSomeInputs}
                                            data-test="habit-day"
                                            className="day"
                                            key={i}
                                            onClick={() => selectingDay(i)}
                                            colorFont={daysSelected.includes(i) ? "#FFFFFF" : "#DBDBDB"}
                                            backgroundColor={daysSelected.includes(i) ? "#CFCFCF" : "#FFFFFF"}
                                        >
                                            {day}
                                        </DaysButton>)}
                                </div>
                            </div>
                        </HabitList>)
                    }

                </>
            )
        }

    }

    function selectingDay(day) {
        console.log("função sendo chamada")
        if (daysSelected.includes(day)) {
            setDaysSelected(
                daysSelected.filter(index => index !== day)
            );
        } else {
            const newDaySelected = [...daysSelected, day];
            setDaysSelected(newDaySelected)
        }
    }

    function addHabit() {
        setShowCreateHabit("flex");
    }

    function addHabitRequesting(event) {
        event.preventDefault();
        console.log(daysSelected);
        const auxiliarHabit = habit.trim();

        if (daysSelected.length == 0) {
            alert("Selecione pelo menos um dia!")
            return
        }

        if (auxiliarHabit.length === 0) {
            alert("O campo hábito não pode ficar vazio!")
            return
        }

        setDisableInputs(true);
        setSave("");
        setIsLoading(true);

        const body = {
            name: auxiliarHabit,
            days: daysSelected
        }

        console.log(body);

        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config)

        request.then(response => {
            console.log(response)
            setShowCreateHabit("none");
            setDisableInputs(false);
            setSave("Salvar");
            setIsLoading(false);
            setHabit("");
            setDaysSelected([]);
            setList(...list, body)

        })

        request.catch(error => {
            console.log(error);
            alert("Deu ruim!")
        })
    }

    function cancelRequest() {
        setHabit("");
        setDaysSelected([]);
        setShowCreateHabit("none");
    }

    function deleteHabit(habitID) {

        // console.log(habitID.habit.name);
        // const confirmed = 
        // console.log(confirmed);

        if (window.confirm(`Deseja excluir o hábito "${habitID.habit.name}"`)) {
            const deleteHabit = habitID.habit;
            const deleteHabitID = (habitID.habit.id)

            const request = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${deleteHabitID}`, config)


            request.then(response => {
                console.log(response)
                setList(...list, deleteHabit)
            });
        } else {
            return
        }
    }

    return (
        <MainDiv>
            <Header />

            <Main>
                <div className="title">
                    <div>Meus Hábitos</div>
                    <img
                        src={addHabitsButton}
                        alt="adicionar hábitos" 
                        ata-test="habit-create-btn"
                        onClick={addHabit} />
                </div>


                <AddHabitForm
                    data-test="habit-create-container"
                    visible={showCreateHabit}>

                    <input
                        type="text"
                        disabled={disableInputs}
                        value={habit}
                        placeholder="nome do hábito"
                        required
                        data-test="habit-name-input"
                        onChange={e => setHabit(e.target.value)} />

                    <div className="weekdays">
                        {weekdays.map((day, i) =>
                            <DaysButton
                                type="button"
                                disabled={disableInputs}
                                data-test="habit-day"
                                onClick={() => selectingDay(i)}
                                className="day"
                                key={i}
                                colorFont={daysSelected.includes(i) ? "#FFFFFF" : "#DBDBDB"}
                                backgroundColor={daysSelected.includes(i) ? "#CFCFCF" : "#FFFFFF"}
                            >
                                {day}
                            </DaysButton>)}
                    </div>

                    <div className="saveOrCancel">
                        <CancelButton
                            disabled={disableInputs}
                            data-test="habit-create-cancel-btn"
                            // onClick={() => setPercentage(percentage + 1)}
                            onClick={() => cancelRequest()}>
                            Cancelar
                        </CancelButton>

                        <SaveButton
                            type="submit"
                            data-test="habit-create-save-btn"
                            onClick={addHabitRequesting}
                            colorOpacity={isLoading ? "0.7" : "1"}>
                            {save}
                            {isLoading && (
                                <ThreeDots
                                    color="#FFFFFF"
                                    height="13px"
                                    width="51px"
                                    visible={isLoading} />
                            )}
                        </SaveButton>
                    </div>

                </AddHabitForm>

                {listingHabits()}

            </Main>

            <Menu />

        </MainDiv >

    )
}

const MainDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;

width: 100vw;
height: 100vh; //tenho que alterar isso!
background-color: #E5E5E5;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
`
const Main = styled.main`
position: absolute;
width:91vw;
height: auto;
padding: 18px;
margin-top: 98px;

font-size: 18px;
color: #666666;
text-align: justify;


    .title{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 22px;

        font-size: 23px;
        color: #126BA5;
    }
    
    input{
    // width: 303px;
    width:90%;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-bottom: 6px;
    
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    color: #666666;
    ::placeholder{
        color: #DBDBDB;
        }
    
}
    
    .weekdays {
    // width: 303px;
    width: 90%;
    display: flex;
    justify-content: space-between;
    
        
    } 
}
`
const AddHabitForm = styled.form`
display: ${props => props.visible};
flex-direction: column;
align-items: center;
justify-content: center;

height: 180px;
background: #FFFFFF;
border-radius: 5px;
margin-bottom: 29px;

    .saveOrCancel{
    // width: 303px;
    width: 90%;
    margin-top: 29px;
    display: flex;

    justify-content: flex-end;
    gap: 10px;

    font-size: 16px;
    text-align: center;

        button{
            width: 84px;
            height: 35px;
        }
    }
}
`
const HabitList = styled.div`
display: flex;
flex-direction: column;
// align-items: center;
justify-content: center;

min-height: 91px;
background: #FFFFFF;
border-radius: 5px;
margin-bottom: 29px;
    
    .habitDescription{
        max-width:90%;
        margin-bottom: 10px;
    }

    .habitWrapper {
        position: relative;
    }

    .trashHabit{
        position: absolute;
        top: -8px;
        right: -8px;
        color: red;
    }

    button{
        width: 30px;
        height: 30px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        color: #DBDBDB;
    }

    .listingHabit{
        padding: 18px;
    }
} 
`
const DaysButton = styled.button`
width: 30px;
height: 30px;
// background-color: #FFFFFF;
background-color: ${props => props.backgroundColor};
border: 1px solid #D5D5D5;
border-radius: 5px;
// color: #DBDBDB;
color: ${props => props.colorFont}
`
const CancelButton = styled.button`
background-color:  #FFFFFF;
border: 1px solid #52B6FF;
color: #52B6FF;
border-radius: 5px;
    &:hover {
        border: none;
        color: #FFFFFF;
        background: #CFCFCF;
    }
`
const SaveButton = styled.button`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

color: #FFFFFF;
text-align: center;

background-color:  #52B6FF;
opacity: ${props => props.colorOpacity};
border: none;
border-radius: 5px;
    &:hover{
        background: #3F8FD2;
    }
`