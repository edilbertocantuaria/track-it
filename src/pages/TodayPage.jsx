import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import axios from "axios"
import dayjs from 'dayjs';
import "dayjs/locale/pt-br";

import checkedHabit from "../assets/checkedHabit.png"
import notCheckedHabit from "../assets/notCheckedHabit.png"

import Header from "../components/HeaderRender";
import Menu from "../components/MenuRender"
import useAppContext from '../hook/useAppContext'

export default function TodayPage() {

    const [todayDate, setTodayDate] = useState("");
    const [percentageRate, setPercentageRate] = useState(0);

    const { percentage, setPercentage,
        done, setDone,
        token,
        habitsDescription, setHabitsDescription,
        listHabit, setListHabit } = useAppContext();

    const noHabitYet = "Nenhum hábito concluído ainda";
    const progessToday = `${percentage}% dos hábitos concluídos`

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

        const date = dayjs();
        let aux_todayDate = date.locale('pt-br').format('dddd, DD/MM');
        let auxDate1 = aux_todayDate[0].toUpperCase();
        let auxDate2 = aux_todayDate.slice(1);
        setTodayDate(auxDate1 + auxDate2)
        return
    },
        [habitsDescription])

    useEffect(() => {
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
        request.then(response => {
            setListHabit(response.data);
        });
        request.catch(error => {
            console.log(error);
        })
    },
        [habitsDescription])

    useEffect(() => {
        let doneCount = 0;
        listHabit.forEach(habit => {
            if (habit.done) {
                doneCount++;
            }
        });
        let auxPercentage = (doneCount / listHabit.length) * 100;
        setPercentageRate(auxPercentage);
        setPercentage(auxPercentage);
    }, [listHabit]);

    function habitsRender() {
        return (
            <>
                {listHabit.map((habit) =>
                    <div className="habitList"
                        key={habit.id}>
                        <div className="habitDescription">
                            <div className="habitName" data-test="today-habit-name">{habit.name}</div>
                            <div className="habitSequence" data-test="today-habit-sequence">Sequência atual: <span>{habit.currentSequence} dias</span></div>
                            <div className="habitRecord" data-test="today-habit-record" >Seu recorde: <span>{habit.highestSequence} dias</span></div>
                        </div>

                        <div className="todayHabitCheck" data-test="today-habit-check-btn">
                            <img src={habit.done ? checkedHabit : notCheckedHabit} alt="status do hábito" onClick={() => habitDone(habit)} />
                        </div>

                    </div>
                )}
            </>
        )
    }

    function habitDone(habit) {
        // console.log(habit.id);
        const body = {}

        if (!habit.done) {
            //to check✅ the habit
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/check`, body, config)
                .then(response =>
                    console.log(response),
                )
                .catch(error =>
                    console.log(error)
                )

        } else {
            //to uncheck ☑️ the habit
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/uncheck`, body, config)
                .then(response =>
                    console.log(response),
                )
                .catch(error =>
                    console.log(error)
                )
        }
    }

    return (
        <MainDiv>

            <Header />

            <Main>
                <div className="date">
                    <div data-test="today">{todayDate}</div>
                    <TodayCounter
                        // className="progress"
                        data-test="today-counter"
                        colorFont={percentage > 0 ? "#8FC549" : "#BABABA"} >
                        {percentage > 0 ? progessToday : noHabitYet}
                    </TodayCounter >
                </div>

                {habitsDescription.length === 0 ? "" : habitsRender()}

            </Main>

            <Menu />

        </MainDiv>

    )
}

const MainDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;

width: 100vw;
height: 100vh;
background-color: #E5E5E5;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
`
const Main = styled.div`
position: absolute;
max-width:91vh;
padding: 18px;
margin-top: 98px;

font-size: 18px;
color: #666666;
text-align: justify;


    .date{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        margin-bottom: 22px;

        font-size: 23px;
        color: #126BA5;

        // .progress{
        //     font-size: 18px;
        //     color: ${props => props.colorFont};
        //     margin-top: 5px;
        // }
    }

    .habitList{
        display: flex;

        align-items: center;
        justify-content: space-between;
        padding: 18px;

        height: 100%;  // change to "auto"
    
        background: #FFFFFF;
        border-radius: 5px;
        margin-bottom: 29px;

        font-size: 13px;
        color: #666666;
        margin-bottom: 16px;

        .habitDescription{
            display: flex;
            flex-direction: column;
                        
            .habitName{
                width: 80%;
                font-size: 20px;
                color: #666666;
            }

            .habitSequence span{
                color: #8FC549;
            }

            .habitRecord span{
                color: #8FC549;
            }

            .habitName, .habitSequence{
                margin-bottom: 8px;
            }
        }

        .todayHabitCheck{
            width: 69px;
            height: 69px;

            border: 1px solid #E7E7E7;
            border-radius: 5px;
        }
    }

}
`
const TodayCounter = styled.div`
font-size: 18px;
color: ${props => props.colorFont};
margin-top: 5px;
`