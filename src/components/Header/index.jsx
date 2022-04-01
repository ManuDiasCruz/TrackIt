import TrackIt from '../../assets/TrackIt.svg';
import {StyledHeader} from './style';

export default function Header(){
    return (
        <StyledHeader>
            <h1>TrackIt</h1>
            <img src={TrackIt} alt="User image" />
        </StyledHeader>
    );
}