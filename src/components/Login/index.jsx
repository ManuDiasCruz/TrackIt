import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Form } from '../../layout/Form';
import { Input } from '../../layout/Input';
import { Button } from '../../layout/Button';

export default function Login({getUserToken}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [color, setColor] = useState('#FFFFFF');
    const [fontColor, setFontColor] = useState('#DBDBDB');
    const [btColor, setBtColor] = useState('#52B6FF');
    const [btMsg, setBtMsg] = useState('Entrar');
    
    const navigate = useNavigate();

    function login(){
        console.log('Vamos logar?!');
        const loginURL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';
        const promise = axios.post(loginURL, {
            email,
            password
        });
        promise.then( response => {
            const {data} = response;
            getUserToken(data.token);
            console.log(data);
            navigate('/HomePage');
        });
        promise.catch(error => {
            alert(error.response.statusText);
        });
    }

    function disableForm(){
        setColor('#F2F2F2');
        setFontColor('AFAFAF');
        setBtColor('#52B6FF');
        setBtMsg('disabled');
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
            <Input 
                color={color}
                fontColor={fontColor}
                type="password" 
                placeholder="senha" 
                onChange={(event)=>setPassword(event.target.value)}
                value={password}
                required/>
            <Button color={btColor} onClick={()=>disableForm}>{btMsg}</Button>
        </Form>
    );
}

