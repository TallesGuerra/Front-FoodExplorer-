import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
  
    
`;

export const Content = styled.div`
    flex: 1;    
 
   
    .btnText{
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    text-align: center;
    gap: 5px;
    
    font-size: 24px;
    font-weight: 700; 

    margin-bottom: 20px;
    padding: 20px 120px;
   } 


`;


export const Form = styled.form` 
    padding: 0 100px;

   .section1{  
   display: flex;
   flex-direction: row;
   
   width: 100%;   
   flex-direction: row;
   
   gap: 32px;
 
   }

   .section1 label{  
    color: ${({theme}) => theme.COLORS.TEXT_LIGHT};
    margin: 32px 0;
   
   }

input, select{
    margin-top: 16px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_FORM};  
     color: ${({theme}) => theme.COLORS.TEXT_WHITE};
    border-radius: 8px;
    border: none;
    
    display: flex;
    padding: 12px 32px;
    justify-content: center;
    align-items: center;
    gap: 8px;  
   }


   input, select, #textarea{
    /* Roboto/Small regular */
    font-family: "Roboto", serif;  
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 16px */
   }

.section2 {
    display: flex;
    gap: 32px;
   
   
}


#textarea{
    width: 100%;
    margin: 32px 0;

    display: flex;
    height: 172px;
    padding: 14px;
    gap: 14px;
    
    align-items: flex-start;
    align-self: stretch;
    border-radius: 8px;

    border-radius: 8px;
    border: none;
    color: ${({theme}) => theme.COLORS.TEXT_WHITE};
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_FORM};  
}

.btnAlign{
    display: flex;
    gap: 10px;
}

.btnDelete{
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_FORM};
}

.btnDelete:hover{
    background-color:#011a27;
  
}

`;