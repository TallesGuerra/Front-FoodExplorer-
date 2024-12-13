import styled from "styled-components";

export const Container = styled.section`
    margin: -50px 120px;
    height: 100vh; 
   /* width:; */

    display: flex;    
    justify-content: center;


    .ButtonText{  
    font-size: 24px;
    font-weight: 700;
    line-height: 140%; /* 33.6px */

    margin-bottom: 42px;

    } 


    .DishInfos{ 
        height: 450px;
        width: 650px;
        padding: 20px;
        
        display: flex;
        flex-direction: column;
        justify-content: space-between ;
        align-items: start;         
    }  
    
`;


export const Card = styled.div`       
    border: none;
    background: none;        
       
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center; 


h3{
    color: ${({ theme }) => theme.COLORS.TEXT_LIGHT};
    font-family: "Poppins", serif;
    font-size: 40px;      
    font-weight: 500;  
    
}  

p{
    font-size: 24px;
    text-align: left;
    font-weight: 400;

    text-align: justify;
}

img{
    max-width: 390px;
    margin-right: 48px;
    
}  

.NumbeOfDishes{
    display: flex;
    gap: 14px;
    align-items: center;

    > svg{
        font-size: 52px;
        cursor: pointer;
    }
    
}

input[type=number]{
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.TEXT_WHITE};   
    font-size: 20px ;
    text-align: center ;
    justify-content: center;
    align-items: center;
    
    width: 50px;
    height: 42px;    

    -moz-appearance: textfield;
    appearance: textfield;    
}  

input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;   

}

button{
text-align: center;

font-size: 14px;
font-weight: 500;
line-height: 24px; /* 171.429% */
}
`;