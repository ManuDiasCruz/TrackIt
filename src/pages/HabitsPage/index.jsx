import { useState } from "react";

import {RiDeleteBin6Line} from "react-icons/ri";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container } from "../../layout/Container";
import { PageTitle } from "../../layout/PageTitle";
import { Button } from "../../layout/Button";
import { Text } from "../../layout/Text";
import * as box from  "../../layout/Box";

export default function HabitsPage(){
    const [status, setStatus] = useState("clicked");

    function mountHabitBox(){
        return (
            <>
                <box.Box>
                    <input type="text" placeholder="nome do hábito"/>
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
                <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>
            </>
        );
    }
    const createHabit = mountHabitBox();

    function openHabitBox(){
        return (
            <>
                <box.Box>
                    <box.Title>
                        <box.H1>Ler 1 capítulo de livro</box.H1>
                        <box.Icon><RiDeleteBin6Line /></box.Icon>
                    </box.Title>
                    <box.Days>
                        <box.MiniBox>D</box.MiniBox>
                        <box.MiniBox>S</box.MiniBox>
                        <box.MiniBox>T</box.MiniBox>
                        <box.MiniBox>Q</box.MiniBox>
                        <box.MiniBox>Q</box.MiniBox>
                        <box.MiniBox>S</box.MiniBox>
                        <box.MiniBox>S</box.MiniBox>
                    </box.Days>
                </box.Box>
            </>
        );
    }
    const openHabit = openHabitBox();

    return(
        <Container color={"#E5E5E5"}>
            <Header></Header>
            <PageTitle button={true}>
                <h1>Meus Hábitos</h1>
                <Button width={"40px"} height={"35px"} color={"#52B6FF"} onClick={()=>setStatus("clicked")}>+</Button>
            </PageTitle>
            {status === 0 ?
                <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>
                :
                status === "clicked" ?
                    <>{createHabit}</>
                    :
                    status === "initialized" ?
                    <>{openHabit}</>
                    :
                    <></>
            }
            <Footer></Footer>
        </Container>
    )
}