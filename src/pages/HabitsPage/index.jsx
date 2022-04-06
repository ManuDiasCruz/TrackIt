import { useState, useEffect, useContext } from "react";
import {RiDeleteBin6Line} from "react-icons/ri";
import axios from "axios";

import UserContext from "../../contexts/UserContext";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container } from "../../layout/Container";
import { PageTitle } from "../../layout/PageTitle";
import { Button } from "../../layout/Button";
import { Text } from "../../layout/Text";
import * as box from  "../../layout/Box";
import { useNavigate } from "react-router-dom";

export default function HabitsPage(){
    const [status, setStatus] = useState(0);
    const [selectedDays, setSelectedDays] = useState([]);
    const [name, setName] = useState("");
    const [habits, setHabits] = useState([]);

    const {token} = useContext(UserContext);
    console.log(`TOKEN: ${token}`) ;
    const navigate = useNavigate();


    const days = [
		{ name: "D", index: 0 },
		{ name: "S", index: 1 },
		{ name: "T", index: 2 },
		{ name: "Q", index: 3 },
		{ name: "Q", index: 4 },
		{ name: "S", index: 5 },
		{ name: "S", index: 6 },
	];

    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    

    console.log(`CONFIG:` + config)

    /* useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${context.token}`
            }
        };

    }, []); */

    useEffect(()=>{
        const promise = axios.get(URL,config);

        promise.then(({ data }) => {
            setHabits(data);
            /* setTimeout(() => setIsLoading(false), 500) */
        });

        console.log('Dentro do useEffect: ' + habits)
        promise.catch(({ response }) => {
            console.log(response);
            /* setTimeout(() => setIsLoading(false), 500) */
        });
    }, []);

    function sendMyHabit(event){
        event.preventDefault();
        const promise = axios.post(
            URL, 
            { //Send the data to the API Server
                days: selectedDays,
                name: name
            },
            config
        );

        promise.then(({ data }) => {
            setHabits([...habits, data]);
            console.log(`HABITS: ${habits}`);
        });

        promise.catch(error => console.log(`Erro: ${error.response.data}`));
    }

    function mountHabitBox(){
        return (
            <>
                <box.Box>
                    <form onSubmit={sendMyHabit}>
                        <input type="text" 
                            placeholder="nome do hábito"
                            onChange={(event)=>setName(event.target.value)}
                            value={name}
                            required
                        />
                        <box.Days>
                            {days.map(({name, index})=>{
                                return (
                                    <box.MiniBox 
                                        selected = {selectedDays.includes(index)?2:0}
                                        onClick={() => 
                                            selectedDays.includes(index)?
                                            setSelectedDays(() => {
                                                let daysAux = selectedDays;
                                                daysAux.splice(selectedDays.indexOf(index),1);
                                                return [...daysAux];
                                            })
                                            :
                                            setSelectedDays([...selectedDays, index])
                                    }>
                                        {name}
                                    </box.MiniBox>
                                )
                            })}
                            {console.log(selectedDays)}
                            {console.log(name)}
                        </box.Days>
                        <box.Buttons>
                            <Button width={"84px"} height={"35px"} color={"#FFFFFF"} fontSize={"15.976px"} fontColor={"#52B6FF"} onClick={()=>setStatus("cancel")}>Cancelar</Button>
                            <Button width={"84px"} height={"35px"} color={"#52B6FF"} fontSize={"15.976px"} fontColor={"#FFFFFF"} type="submit" >Salvar</Button>
                        </box.Buttons>
                    </form>
                </box.Box>
                <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>
            </>
        );
    }
    const createHabit = mountHabitBox();

    function openHabitBox({title, habitDays}){
        return (
            <>
                <box.Box>
                    <box.Title>
                        <box.H1>{title}</box.H1>
                        <box.Icon><RiDeleteBin6Line /></box.Icon>
                    </box.Title>
                    <box.Days>
                        {days.map(({name, index})=>{
                            return (
                                <box.MiniBox selected = {habitDays.includes(index)?true:false}>
                                    {name}
                                </box.MiniBox>
                            )
                        })}
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
            {habits.length > 0 ?
                
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