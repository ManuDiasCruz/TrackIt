import styled from "styled-components";

export const Box = styled.div`
    width: 340px;
    max-height: 180px;
    margin-bottom: 30px;
    padding: 15px;

    background: #FFFFFF;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    align-items: center;

    input{
        width: 310px;
        height: 45px;
        padding: 10px;

        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;

        color: #DBDBDB;
    }
`;

export const Title = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Icon = styled.div`
    margin-left: 85px;
`;

export const H1 = styled.h1`
    width: 100%;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    text-align: left;

    color: #666666;
`;

export const Buttons = styled.div`
    width: 180px;
    margin-top: 30px;
    margin-left: 130px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Days = styled.div`
    width: 260px;
    margin-right: 62px;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;

export const MiniBox = styled.div`
    width: 30px;
    height: 30px;
    left: 138px;
    top: 218px;

    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    text-align: center;

    color: #DBDBDB;
`;