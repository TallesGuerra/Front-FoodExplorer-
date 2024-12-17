import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;   
    align-items: justify;

    margin:  -60px auto 60px;
    width: 1120px;
    overflow: hidden;
    height: 100%; 


    .CardAlign{
        display: flex;
        gap: 27px;
        margin-bottom: 47px ;

       
    }

    .divsALign{
        h2{
        font-family: "Poppins", serif;
        font-size: 32px;      
        font-weight: 500;

        margin-bottom: 24px;

        color: ${({ theme }) => theme.COLORS.TEXT_LIGHT};
    }
    }
`;



export const Card = styled.div`
     border-radius: 8px;
     border: 1px solid #000204;
     background: #00070A;
       
        
        display: flex;
        justify-content: space-between;
        text-align: center;
        flex-direction: column;
        align-items: center;


        height: 462px;
        width: 305px;        
        padding: 24px;
        gap: 15px;
        position: relative;
       

> svg{   
    position: absolute;
    right: 16px;
    top: 16px;
    font-size: 24px;

    cursor: pointer;
}
 
img{
    width: 176px;
    
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
    color: ${({theme}) => theme.COLORS.TEXT_WHITE };   
    font-size: 14px ;
    text-align: center ;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    height: 42px;    

    -moz-appearance: textfield;
    appearance: textfield;    
}  

input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;   

}



`;