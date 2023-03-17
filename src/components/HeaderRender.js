import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useAppContext from '../hook/useAppContext'

export default function HeaderRender() {

    const { username, userImage } = useAppContext();

    return (
        <Header data-test="header">
             <Link to="/"><div>TrackIt</div></Link>
            <Link to="/hoje"><img src={userImage} alt={username} /></Link>
        </Header>
    )
}

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

a {
        color:#FFFFFF;
	    text - decoration: none;
	    &:link, &:visited {
		    color:#FFFFFF;
		    text-decoration: none;
		    cursor: none;
	}

    img{
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
    }
`