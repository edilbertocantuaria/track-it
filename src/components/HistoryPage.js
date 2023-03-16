import styled from "styled-components";
import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import userImage from "../assets/lisa.jpg"
import checkedHabit from "../assets/checkedHabit.png"

export default function HistoryPage() {

    const [habit, setHabit] = useState("");
    const [password, setPassword] = useState("");

    return (
        <MainDiv>
            <Header data-test="header">
                <div>TrackIt</div>
                <img src={userImage} alt="{userName}" />
            </Header>

            <Main>
                <div className="history">
                    <div>Histórico</div>
                    <div className="historyParagraph">Em breve você poderá ver o histórico dos seus hábitos aqui!</div>
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


    .history{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        margin-bottom: 22px;

        font-size: 23px;
        color: #126BA5;

        .historyParagraph{
            font-size: 18px;
            color: #666666;
            margin-top: 17px;
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
