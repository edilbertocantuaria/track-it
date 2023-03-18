import styled from "styled-components";
import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import Header from "../components/HeaderRender"
import Menu from "../components//MenuRender"

export default function HistoryPage() {

    const [habit, setHabit] = useState("");


    return (
        <MainDiv>
            <Header />

            <Main>
                <div className="history">
                    <div>Histórico</div>
                    <div className="historyParagraph">Em breve você poderá ver o histórico dos seus hábitos aqui!</div>
                </div>
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
