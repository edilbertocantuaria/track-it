import styled from "styled-components";
import logo from "../assets/logo.png"
import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios"

export default function SingupPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [userImage, setUserImage] = useState("");

    const navigate = useNavigate();

    function register(event) {
        event.preventDefault();
        console.log(
            {
                email: email,
                name: username,
                image: userImage,
                password: password
            }

        )


        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
            {
                email: email,
                name: username,
                image: userImage,
                password: password
            }
            );

            request.then(response => {
                // alert("Usuário criado! Aproveite a plataforma do TrackIt 😉");
                navigate("/"); 
            })
    
            request.catch(error=> {
                alert("Os dados informados estão incorretos")
                console.log(error.data)
            })

    }

    return (
        <MainDiv>
            <img src={logo} alt="logo Track It" />
            <form onSubmit={register}>
                <input type="email" value={email} placeholder="email" data-test="email-input" onChange={e => setEmail(e.target.value)} />
                <input type="password" value={password} placeholder="senha" data-test="password-input" onChange={e => setPassword(e.target.value.trim())} />
                <input type="name" value={username} placeholder="nome"  data-test="user-name-input" onChange={e => setUsername(e.target.value)} />
                <input type="url" value={userImage} placeholder="foto" data-test="user-image-input" onChange={e => setUserImage(e.target.value)} />
              <SingUpButton type="submit" data-test="login-btn">Cadastrar</SingUpButton>
            </form>
            <Link to="/" data-test="login-link"><SingUpMessage data-test="signup-link">Já tem uma conta? Faça login!</SingUpMessage></Link>
        </MainDiv>

    )
}

const MainDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;

    img{
        margin-top:80px;
        margin-bottom:32.62px;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    input{
        width: 303px;
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

    }
`
const SingUpButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 303px;
    height: 45px;
    background: #52B6FF;
    border-radius: 5px;
    border: none;

    text-align: center;
    font-size: 20.976px;
    color: #FFFFFF;

    margin-bottom: 25px;

    &:hover {
        background: #3F8FD2;
`

const SingUpMessage = styled.div`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 13.976px;
line-height: 17px;
text-align: center;
text-decoration-line: underline;

color: #52B6FF;
`