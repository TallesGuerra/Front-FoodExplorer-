import styled from "styled-components";


export const Container = styled.footer`
    width: 100%; 
    height: 20px;
    padding: 20px;    
    
    display: flex; 
    align-items: center;   
    justify-content: space-around;
   

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_HEADER};
    font-size: 12px;
    font-weight: 400;
    line-height: 160%; /* 22.4px */


    > img{
        width: 120px;
    }

`;