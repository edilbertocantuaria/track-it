import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import axios from "axios"

import checkedHabit from "../assets/checkedHabit.png"

import Header from "../components/HeaderRender";
import Menu from "../components/MenuRender"
import useAppContext from '../hook/useAppContext'

export default function TodayPage() {
const [listHabit, setListHabit] = useState([])

    const { token,
                habitsDescription, setHabitsDescription } = useAppContext();

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


    function habitsRender() {

        return (
            <div className="habitList">

                <div className="habitDescription">
                    <div className="habitName" data-test="today-habit-name">Ler 1 capítulo de livro</div>
                    <div className="habitSequence" data-test="today-habit-sequence">Sequência atual: <span>3 dias</span></div>
                    <div className="habitRecord" data-test="today-habit-record" >Seu recorde: <span>5 dias</span></div>
                </div>

                <div className="todayHabitCheck" data-test="today-habit-check-btn">
                    <img src={checkedHabit} alt="status do hábito" />
                </div>

            </div>

        )
    }



    return (
        <MainDiv>

            <Header />

            <Main>
                <div className="date">
                    <div data-test="today">Segunda, 17/05</div>
                    <div className="progress" data-test="today-counter">Nenhum hábito concluído ainda</div>
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

        .progress{
            font-size: 18px;
            color: #BABABA;
            margin-top: 5px;

            //color: #8FC549 when habits progress > 0%;
        }
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