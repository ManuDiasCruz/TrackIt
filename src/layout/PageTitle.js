import styled from "styled-components";

export const PageTitle=styled.main`
    width: 100%;
    height: 70px;
    margin-top: 70px;
    padding: 17px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${props => props.button ? "space-between" : "left"};
    background: local;

    h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
        background: local;
    }
`;