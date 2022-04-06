/* import { useState, useEffect } from "react";
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import styled from "styled-components"; */

import axios from "axios";
import { useState, useEffect, useContext } from "react";

import UserContext from "../../contexts/UserContext";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Button } from "../../layout/Button";
import { Container } from "../../layout/Container";
import { PageTitle } from "../../layout/PageTitle";
import * as box from  "../../layout/Box";


export default function HomePage(){
    const [habits, setHabits] = useState('');
    const [status, setStatus] = useState('');
    const context = useContext(UserContext);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${context.token}`
            }
        };

        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today';
        const promise = axios.get(URL, config);
        promise.then(response => {
            const {data} = response;
            setHabits(data);
            console.log(habits)
        });
        promise.catch(error => 
            alert(`Você não tem permissão para acessar essa página.
            ${error.response.data}`)
        );

    }, []);

    

    return(
        <Container color={"#E5E5E5"}>
            <Header></Header>
            <PageTitle button={false}>
                <h1>Dia da semana</h1>
                <h2>Nenhum hábito concluído ainda</h2>
            </PageTitle>
            <box.Box>
                    <box.H1></box.H1>
                    <box.Days>
                        <box.MiniBox>D</box.MiniBox>
                        <box.MiniBox>S</box.MiniBox>
                        <box.MiniBox>T</box.MiniBox>
                        <box.MiniBox>Q</box.MiniBox>
                        <box.MiniBox>Q</box.MiniBox>
                        <box.MiniBox>S</box.MiniBox>
                        <box.MiniBox>S</box.MiniBox>
                    </box.Days>
                    <box.Buttons>
                        <Button width={"84px"} height={"35px"} color={"#FFFFFF"} fontSize={"15.976px"} fontColor={"#52B6FF"} onClick={()=>setStatus("cancel")}>Cancelar</Button>
                        <Button width={"84px"} height={"35px"} color={"#52B6FF"} fontSize={"15.976px"} fontColor={"#FFFFFF"} onClick={()=>setStatus("save")}>Salvar</Button>
                    </box.Buttons>
                </box.Box>
            <Footer></Footer>
        </Container>
    );
}