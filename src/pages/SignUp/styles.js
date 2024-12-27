import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    
    justify-content: center;
    text-align: center;
    align-items: center;
    gap: 100px;
   

    img{
        max-width: 300px;        
    }

    h1{    
        font-size: 32px;
        font-weight: 500;
        line-height: 140%; /* 44.8px */
   }

   label{
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 8px;
    
   }
   
    `;

export const Form = styled.form`
    display: flex;
    flex-direction: column;      

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_FORM};  
    border-radius: 16px;
    height: auto;
    padding: 64px;
    width: 500px;
    gap: 32px;

  
    
`;