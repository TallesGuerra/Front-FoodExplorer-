import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 14px;
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};

    padding: 12px 14px;        
    border-radius: 10px;
   
    
    svg{
        margin: 0 auto;           
        }

    >input{        
        height: auto;
        width: 100%;
        padding: auto;        
        
        color: ${({ theme }) => theme.COLORS.TEXT_WHITE};   
        background: transparent;
        border: none;  
    }
`;