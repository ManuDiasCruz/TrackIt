import styled from "styled-components";

export const Container=styled.main`
    background: ${props => props.color};
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;