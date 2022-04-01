import styled from "styled-components";

export const StyledHeader = styled.header`
    position: fixed;
    width: 100%;
    height: 70px;
    top: 0px;
    left: 0px;
    right: 0px;
    padding: 20px;

    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    display: flex;
    align-items: center;
    justify-content: space-between;

    h1{
        font-family: 'Playball';
        font-size: 38.982px;
        line-height: 49px;
        background: #126BA5;
        color: #FFFFFF;
    }

    img{
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
    }
`;