import styled from "styled-components";

export const Button = styled.button`
    width: ${props => props.width === undefined ? "303px" : props.width};
    height: ${props => props.height === undefined ? "45px" : props.height};
    background: ${props => props.color};
    border-radius: 4.63636px;
    
    font-family: 'Lexend Deca', sans-serif;        
    font-size: ${props => props.fontSize === undefined ? "20.976px" : props.fontSize};
    line-height: 26px;
    text-align: center;

    color: ${props => props.fontColor === undefined ? "#FFFFFF" : props.fontColor};;
`;