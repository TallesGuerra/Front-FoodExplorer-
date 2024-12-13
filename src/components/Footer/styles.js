import styled from "styled-components";


export const Container = styled.footer`
    width: 100vw; 
    height: 50px;
    padding: 24px;    
    
    display: flex; 
    align-items: center;   
    justify-content: space-around;
    flex-shrink: 0;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_HEADER};
    font-size: 12px;
    font-weight: 400;
    line-height: 160%; /* 22.4px */


    > img{
        width: 150px;
    }

`;