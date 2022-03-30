import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Form } from '../../layout/Form';
import { Input } from '../../layout/Input';
import { Button } from '../../layout/Button';

export default function Register(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');

    const [color, setColor] = useState('#FFFFFF');
    const [fontColor, setFontColor] = useState('#DBDBDB');
    const [btColor, setBtColor] = useState('#52B6FF');
    const [btMsg, setBtMsg] = useState('Cadastrar');

    const navigate = useNavigate();
    
    function register(){
        alert('Vamos cadastrar?!');
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up';
        const promise = axios.post(URL, {
            email,
            name, 
            image: photo,
            password
        });
        promise.then(response => {
            const {data} = response;
            console.log(data);
            navigate('/');
        });
        promise.catch(error => alert(error.response));
    }

    function disableForm(){
        console.log(name, password, email, photo);
        setColor('#F2F2F2');
        setFontColor('AFAFAF');
        setBtColor('#52B6FF');
        setBtMsg('disabled');
    }

    return (
        <Form onSubmit={register}>
            {console.log('Entrei em Register')}
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
            <Input 
                color={color}
                fontColor={fontColor}
                type="text" 
                placeholder="nome" 
                onChange={(event)=>setName(event.target.value)}
                value={name}
                required/>
            <Input 
                color={color}
                fontColor={fontColor}
                type="text" 
                placeholder="foto" 
                onChange={(event)=>setPhoto(event.target.value)}
                value={photo}
                required/>
            <Button color={btColor} onClick={()=>disableForm}>{btMsg}</Button>
        </Form>
    );
}