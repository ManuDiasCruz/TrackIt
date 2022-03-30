import styled from "styled-components";

export const Input = styled.input`
    width: 303px;
    height: 45px;
    padding: 5px;
    margin-bottom: 5px;
    background:${props => props.color};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 19.5px;
    color: ${props => props.fontColor};
`;