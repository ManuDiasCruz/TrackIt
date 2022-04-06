import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


import UserContext from '../../contexts/UserContext';

import { Form } from '../../layout/Form';
import { Input } from '../../layout/Input';
import { Button } from '../../layout/Button';

export default function Login(){
    const [email, setEmail] = useState('email');
    const [password, setPassword] = useState('senha');
    
    const [available, setAvailable] = useState(); //Para lembrar de usar uma variável só
    const [color, setColor] = useState('#FFFFFF');
    const [fontColor, setFontColor] = useState('#DBDBDB');
    const [btColor, setBtColor] = useState('#52B6FF');
    const [btMsg, setBtMsg] = useState('Entrar');
    
    const navigate = useNavigate();

    const context = useContext(UserContext);

    function login(event){
        event.preventDefault();

        disableForm();

        const loginURL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';
        const obj = {
            email,
            password
        };

        console.log(obj)
        const promise = axios.post(loginURL, obj);
        promise.then( response => {
            const {data} = response;
            context.setToken(data.token);
            console.log(data);
            navigate('/hoje');
        });

        promise.catch(error => {
            alert(`Falha no login! ${error.response.data}`);
            enableForm();
        });
    }

    function disableForm(){
        setColor('#F2F2F2');
        setFontColor('AFAFAF');
        setBtColor('#52B6FF');
        setBtMsg('disabled');
    }

    function enableForm(){

        setEmail('');
        setPassword('');
        
        setColor('#FFFFFF');
        setFontColor('DBDBDB');
        setBtColor('#52B6FF');
        setBtMsg('Entrar');
    }

    return (
        <Form onSubmit={login}>
            {console.log('Entrei em Login')}
            <Input 
                color={color}
                fontColor={fontColor}
                type="text" 
                placeholder="email" 
                onChange={(event)=>setEmail(event.target.value)}
                value={email}
                required/>
                {console.log(email)}
            <Input 
                color={color}
                fontColor={fontColor}
                type="password" 
                placeholder="senha" 
                onChange={(event)=>setPassword(event.target.value)}
                value={password}
                required/>
                {console.log(email)}
            <Button type={"submit"} color={btColor} >{btMsg}</Button>
        </Form>
    );
}

