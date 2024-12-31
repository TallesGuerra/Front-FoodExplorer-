import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid; 
    grid-template-columns: auto;
    grid-template-rows: 90px auto 50px;
    grid-template-areas: 
    "header"
    "content"
    "footer";  


    .DishAlign{
    border: none;
    background: none;        
       
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center; 

    }

    > img{
    max-width: 390px;
    margin-right: 48px;
    }
`;



export const Content = styled.div`
    grid-area: content;
    width: 100vw;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center ;
  
`;


export const Main = styled.div`
    display: flex;
    align-items: center;
    margin: 164px;
    
    width: 1120px;
    height: 260px;
    flex-shrink: 0;       
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_MAIN};
    border-radius: 5px;
       
       

    .imgAlign{        
        position: relative;
        margin-bottom: 145px;
        margin-left: -40px;    
      
    };

    .textAlign{        
        position: relative;
        text-align: justify;

        h2{            
        font-family: Poppins;
        font-size: 40px;       
        font-weight: 500;
        line-height: 140%; /* 56px */  

        margin-bottom: 8px;
        }

        p{
        font-family: Roboto;
        font-size: 16px;
        font-weight: 400;
        line-height: 100%; /* 16px */
        }
    }    
    
   
   
`;