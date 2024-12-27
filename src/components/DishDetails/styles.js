import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;    
    justify-content: center;
    
    h2{
        flex: 1;
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
      
        height: 100%;
        width: 650px;     
        gap: 15px;
        
        display: flex;
        flex-direction: column;
        align-items: start;         
        
        
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
margin-left: 10px;
font-size: 14px;
font-weight: 500;
line-height: 24px; /* 171.429% */
}
`;