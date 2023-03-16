import styled from "styled-components";
import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import addHabitsButton from "../assets/addHabitsButton.png"
import userImage from "../assets/lisa.jpg"
import checkedHabit from "../assets/checkedHabit.png"

export default function TodayPage() {

    const [habit, setHabit] = useState("");
    const [password, setPassword] = useState("");

    return (
        <MainDiv>
            <Header data-test="header">
                <div>TrackIt</div>
                <img src={userImage} alt="{userName}" />
            </Header>

            <Main>
                <div className="date">
                    <div data-test="today">Algum dia da semana aqui, DD/MM</div>
                    <div className="progress" data-test="today-counter">Nenhum hábito concluído ainda</div>
                </div>
                <div className="habitList">
                    <div className="habitDescription">
                        <div className="habitName" data-test="today-habit-name">Ler 1 capítulo de livro</div>
                        <div className="habitSequence" data-test="today-habit-sequence">Sequência atual: <span>3 dias</span></div>
                        <div className="habitRecord" data-test="today-habit-record" >Seu recorde: 5 dias</div>


                    </div>
                    <div className="todayHabitCheck" data-test="today-habit-check-btn">
                        <img src={checkedHabit} alt="status do hábito"/>

                    </div>


                </div>

            </Main>

            <Menu data-test="menu">
                <div data-test="habit-link" >Hábitos</div>
                <ProgressBar data-test="today-link">Hoje</ProgressBar>
                <div data-test="history-link">Histórico</div>
            </Menu>
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
const Header = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 18px;

width: 100vw;
height: 70px;
background-color: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
position: fixed;
top: 0;
left:0;

font-family: 'Playball';
font-style: normal;
font-weight: 400;
font-size: 39px;
color: #FFFFFF;

    img{
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
    }
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
                font-size: 20px;
                color: #666666;
            }

            .habitSequence span{
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

const Menu = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 18px;

width: 100vw;
height: 70px;
background-color: #FFFFFF;
position: fixed;
bottom: 0;
left:0;

font-family: "Lexend Deca";
font-style: normal;
font-weight: 400;
font-size: 18px;
color: #52B6FF;
`
const ProgressBar = styled.div`
display: flex;
align-items: center;
justify-content: center;

position: absolute;
z-index:1;
left: calc(50% - 45.5px);
margin-bottom: 45.5px;

background-color: #52B6FF;
width: 91px;
height: 91px;
border-radius: 98.5px;

color:#FFFFFF;
text-align: center;

`
