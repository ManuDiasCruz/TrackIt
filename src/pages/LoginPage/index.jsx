/* import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components"; */
import {useNavigate} from 'react-router-dom';

import Logo from '../../components/Logo';
import Login from '../../components/Login';

import {Container} from '../../layout/Container';
import {RegisterMsg} from '../../layout/RegisterMsg';
import { useState } from 'react';

export default function HomePage(){
    const navigate = useNavigate();
    const [token, getToken] = useState();
    return(
        <Container>
            {console.log("Entrei na Loginpage")}
            <Logo />
            <Login getUserToken={user => getToken(user)}/>
            {console.log(token)}
            <RegisterMsg onClick={()=>navigate('/cadastro')}>Não tem uma conta? Cadastre-se!</RegisterMsg>
        </Container>
    );
}