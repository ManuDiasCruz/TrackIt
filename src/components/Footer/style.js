import styled from "styled-components";

export const StyledFooter = styled.footer`
    position: fixed;
    width: 100%;
    max-height: 70px;
    bottom: 0px;
    left: 0px;
    right: 0px;

    background: #FFFFFF;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    h1{        
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;
    }

    div{
        width: 91px;
        height: 91px;
        border-radius: 98.5px;
        background: #52B6FF;
        margin-bottom: 40px;
    }
`;