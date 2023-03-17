import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import ProgressBar from "../helpers/ProgressBar"

export default function MenuRender() {
    return (
        <Menu data-test="menu">
            <div data-test="habit-link" ><Link to="/habitos">Hábitos</Link></div>
            <ProgressBarStyled data-test="today-link"><Link to="/hoje"><ProgressBar /></Link></ProgressBarStyled>
            <div data-test="history-link"><Link to="/historico">Histórico</Link></div>
        </Menu>
    )
}
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