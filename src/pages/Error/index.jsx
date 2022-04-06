import {useNavigate, useParams} from 'react-router-dom';

import Logo from '../../components/Logo';
import Login from '../../components/Login';

import {Container} from '../../layout/Container';
import {RegisterMsg} from '../../layout/RegisterMsg';
import { useState } from 'react';

export default function LoginPage(){
    const navigate = useNavigate();
    const error = useParams();

    return(
        <Container color={"#FFFFFF"}>
            {console.log("Entrei na Errorpage")}
            <Logo />
            <Title>{error}</Title>
        </Container>
    );
}