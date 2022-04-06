/* import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components"; */
import {useNavigate} from 'react-router-dom';

import Logo from '../../components/Logo';
import Login from '../../components/Login';

import {Container} from '../../layout/Container';
import {RegisterMsg} from '../../layout/RegisterMsg';

import { useState, useContext } from 'react';
import UserContext from '../../contexts/UserContext';

export default function LoginPage(){
    const navigate = useNavigate();

    return(
        <Container color={"#FFFFFF"}>
            <Logo />
            <Login />
            <RegisterMsg onClick={()=>navigate('/cadastro')}>Não tem uma conta? Cadastre-se!</RegisterMsg>
        </Container>
    );
}