import styled from "styled-components";

export const PageTitle=styled.main`
    width: 100%;
    height: 70px;
    margin-top: 70px;
    padding: 17px;
    display: flex;
    flex-direction: ${props => props.button ? "row" : "column"};
    align-items: ${props => props.button ? "center" : "left"};
    justify-content: ${props => props.button ? "space-between" : "left"};
    background: local;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;

    h1{
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
        background: local;
    }

    h2{
        font-size: 17.976px;
        line-height: 22px;
        color: #BABABA;
        background: local;
    }
`;