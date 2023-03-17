import styled from "styled-components";
import { useState, useContext, React } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import addHabitsButton from "../assets/addHabitsButton.png"
import userImage from "../assets/lisa.jpg"
import trashIcon from "../assets/trashIcon.png"

import weekdays from "../helpers/weekdays";
import ProgressBar from "../helpers/ProgressBar"



export default function HabitsPage() {
    const [habit, setHabit] = useState("");

    const Context = React.createContext();
    const dataUser = useContext(Context);
    console.log(Context);
    console.log(dataUser);


    return (
        <MainDiv>
            <Header data-test="header">
                <div>TrackIt</div>
                {/* <img src={userImage} alt="{userName}" /> */}
            </Header>

            <Main>
                <div className="title">
                    <div>Meus Hábitos</div>
                    <img src={dataUser.image} alt="adicionar hábitos" data-test="habit-create-btn" />
                </div>
                <div className="addHabit" data-test="habit-create-container">
                    <input type="text" value={habit} placeholder="nome do hábito" required data-test="habit-name-input" onChange={e => setHabit(e.target.value)} />
                    <div className="weekdays">
                        {weekdays.map((day, i) =>
                            <button className="day" key={i} data-test="habit-day">
                                {day}
                            </button>)}
                    </div>
                    <div className="saveOrCancel">
                        <button className="cancelButton" data-test="habit-create-cancel-btn">Cancelar</button>
                        <button className="saveButton" data-test="habit-create-save-btn">Salvar</button>
                    </div>
                </div>
                <div className="habitList">
                    <div className="listingHabit">
                        <div className="habitWrapper">
                            <img src={trashIcon} className="trashHabit" alt="excluir hábito" />
                        </div>
                        <div className="habitDescription">Algum hábito escrito aqui</div>
                        <div className="weekdays">
                            {weekdays.map((day, i) =>
                                <button className="day" key={i} data-test="habit-day">
                                    {day}
                                </button>)}
                        </div>
                    </div>

                </div>

                <div>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</div>
            </Main>

            <Menu data-test="menu">
                <div data-test="habit-link" ><Link to="/habitos">Hábitos</Link></div>
                <ProgressBarStyled data-test="today-link"><ProgressBar /><Link to="/hoje"></Link></ProgressBarStyled>
                <div data-test="history-link"><Link to="/historico">Histórico</Link></div>
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


    .title{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 22px;

        font-size: 23px;
        color: #126BA5;
    }

    .addHabit{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        height: 180px;
        background: #FFFFFF;
        border-radius: 5px;
        margin-bottom: 29px;
    }
    .listingHabit{
        padding: 18px;
    }

    .habitList{
        display: flex;
        flex-direction: column;
        // align-items: center;
        justify-content: center;

        height: 91px;
        background: #FFFFFF;
        border-radius: 5px;
        margin-bottom: 29px;


            .habitDescription{
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
        ::placeholder{
            color: #DBDBDB;
        }
    }

    .weekdays {
        // width: 303px;
        width: 90%;
        display: flex;
        justify-content: space-between;

        button{
            width: 30px;
            height: 30px;
            background: #FFFFFF;
            border: 1px solid #D5D5D5;
            border-radius: 5px;
            color: #DBDBDB;
        }
    }

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

        .cancelButton{
            background-color:  #FFFFFF;
            border: 1px solid #52B6FF;
            color: #52B6FF;
            border-radius: 5px;
            &:hover {
                border: none;
                color: #FFFFFF;
                background: #CFCFCF;
        }
    }

        .saveButton{
            background-color:  #52B6FF;
            border: none;
            color: #FFFFFF;
            border-radius: 5px;

            &:hover{
                    background: #3F8FD2;
            }
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

    a {
        color:#52B6FF;
	    text - decoration: none;
	    &:link, &:visited {
		    color:#52B6FF;
		    text-decoration: none;
		    cursor: none;
	}
`
const ProgressBarStyled = styled.div`
display: flex;
align-items: center;
justify-content: center;

position: absolute;
z-index:1;
left: calc(50% - 45.5px);
margin-bottom: 70.5px;

width: 91px;
height: 91px;

    a {
        color:#FFFFFF;
	    text - decoration: none;
	    &:link, &:visited {
		    color:#FFFFFF;
		    text-decoration: none;
		    cursor: none;
	}
`
