import styled from "styled-components";
import logo from "../assets/logo.png"
import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios"
import { ThreeDots } from "react-loader-spinner";


export default function LoginPage() {

    const [disableInputs, setDisableInputs] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [enter, setEnter] = useState("Entrar")


    const navigate = useNavigate();

    function Login(event) {
        event.preventDefault();

        setDisableInputs(true);
        
        setEnter("");
        setIsLoading(true);

        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
            {
                email: email,
                password: password
            }

        )

        request.then(() => {
            navigate("/hoje");
        })

        request.catch(() => {
            alert("Os dados informados estão incorretos ou o usuário não está cadastrado!")
            setDisableInputs(false);
            setIsLoading(false);
            setEnter("Entrar");

        })

    }

    return (
        <MainDiv>
            <img src={logo} alt="logo Track It" />
            <form onSubmit={Login}>
                <input
                    type="email"
                    disabled={disableInputs}
                    value={email}
                    placeholder="email"
                    required
                    data-test="email-input"
                    onChange={e => setEmail(e.target.value)} />

                <input
                    type="password"
                    disabled={disableInputs}
                    value={password}
                    placeholder="senha"
                    required
                    data-test="password-input"
                    onChange={e => setPassword(e.target.value)} />
                <>
                    <ButtonLogin
                        type="submit"
                        data-test="login-btn"
                        disabled={disableInputs}>
                        {enter}
                        {isLoading && (
                            <ThreeDots
                                color="#FFFFFF"
                                height="13px"
                                width="51px"
                                visible={isLoading} />
                        )}
                    </ButtonLogin>

                </>
            </form>
            <Link to="/cadastro" data-test="signup-link"><SingUpMessage data-test="signup-link">Não tem uma conta? Cadastre-se!</SingUpMessage></Link>
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
const ButtonLogin = styled.button`
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