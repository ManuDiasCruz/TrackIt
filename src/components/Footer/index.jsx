import {StyledFooter} from './style';
import {Link, useNavigate} from "react-router-dom";

export default function Footer(){
    const navigate = useNavigate();

    return (
        <StyledFooter>
            <h1  onClick={()=>navigate('/habitos')}>Hábitos</h1>
            <div onClick={()=>navigate('/hoje')}></div>
            <h1  onClick={()=>navigate('/historico')}>Histórico</h1>
        </StyledFooter>
    );
}