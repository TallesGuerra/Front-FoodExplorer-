import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;    
    justify-content: center;
    gap: 15px;
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};

    padding: 12px 24px;        
    border-radius: 10px; 
    
   

    >input{           
        height: auto;        
        width: 100%;       
        
        color: ${({ theme }) => theme.COLORS.TEXT_WHITE};   
        background: transparent;
        border: none;  
    }

    ::placeholder{ 
    font-family: "Roboto", serif;  
    font-size: 16px;
    font-weight: 400;
    
} 
`;