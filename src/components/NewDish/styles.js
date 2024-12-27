import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100vw;   
    padding: 0 100px;

    display: flex;  
    align-items:center;
    justify-content: center;
    text-align: center;

    

    img{
         width: 390px;
         height: auto; 
         
         
    }


`;

export const Content = styled.div`
width: 100vw;
    display: flex; 
    text-align: center;  
    margin-bottom: 50px ;  


    .btnText{
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    text-align: center;

    font-size: 24px;
    font-weight: 700; 

    margin-bottom: 20px;
   } 

    main{       
    display: flex;   
    text-align: justify;
    align-items: center;
    justify-content: center;
    flex-direction: column;
     

    h2{
        text-align: left;
        font-weight: 700;
        font-size: 40px;
        font-family: "Poppins", serif;
        color: ${({ theme }) => theme.COLORS.TEXT_LIGHT};    }   
    
    
    p{
        font-size: 24px;
        text-align: left;
        font-weight: 400;
        text-align: justify;      
    }


    

    .DishInfos{          
        padding: 20px;        
        width: 500px;
        height: auto;

        display: flex;
        flex-direction: column;
        text-align: justify;
        
        gap: 48px;       
        
    }  

    button{
    text-align: center;
    margin-left: 10px;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px; /* 171.429% */
    }

  

    
}
`;