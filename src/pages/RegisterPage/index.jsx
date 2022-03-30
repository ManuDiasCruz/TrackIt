/* import { useState, useEffect } from "react";
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import styled from "styled-components"; */
import {useNavigate} from 'react-router-dom';

import Logo from "../../components/Logo";
import Register from '../../components/Register';

import { Container } from "../../layout/Container";
import { RegisterMsg } from '../../layout/RegisterMsg';

export default function RegisterPage(){
    const navigate = useNavigate();
    return(
        <Container>
            {console.log("Entrei na RegisterPage")}
            <Logo />
            <Register />
            <RegisterMsg onClick={()=>navigate('/')}>Já tem uma conta? Faça login!</RegisterMsg>
        </Container>
    );
}