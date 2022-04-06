import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Form } from '../../layout/Form';
import { Input } from '../../layout/Input';
import { Button } from '../../layout/Button';

export default function Register(){
    
    const [user, setUser] = useState(); //Para lembrar de usar uma variável só
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');

    const [available, setAvailable] = useState(); //Para lembrar de usar uma variável só
    const [color, setColor] = useState('#FFFFFF');
    const [fontColor, setFontColor] = useState('#DBDBDB');
    const [btColor, setBtColor] = useState('#52B6FF');
    const [btMsg, setBtMsg] = useState('Cadastrar');

    const navigate = useNavigate();
    
    function register(event){

        event.preventDefault();

        disableForm();

        console.log('Vamos cadastrar?!');
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up';
        const obj = {
            email,
            name, 
            image: photo,
            password
        };

        console.log(obj);
        const promise = axios.post(URL, obj);
        promise.then(response => {
            const {data} = response;
            console.log(data);
            navigate('/');
        });
        promise.catch(error => {
            alert(`Falha no cadastro! ${error.response.data}`)
            navigate('/cadastro');
        });
    }

    function disableForm(){
        setColor('#F2F2F2');
        setFontColor('#AFAFAF');
        setBtColor('#52B6FF');
        setBtMsg('disabled');
    }

    function enableForm(){
        setColor('#FFFFFF');
        setFontColor('#DBDBDB');
        setBtColor('#52B6FF');
        setBtMsg('Cadastrar');
    }

    return (
        <Form onSubmit={register}>
            {console.log('Entrei em Register')}
            <Input 
                placeholder="email" 
                color={color}
                fontColor={fontColor}
                type="text" 
                onChange={(event)=>setEmail(event.target.value)}
                value={email}
                required/>
                {console.log(email)}
            <Input 
                color={color}
                fontColor={fontColor}
                type="text"
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
            <Button color={btColor} type={"submit"}>{btMsg}</Button>
        </Form>
    );
}