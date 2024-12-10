import styled from "styled-components";

export const Container = styled.section`
    margin: 49px 24px;
   
    gap: 27px;
    
    > h2{
        font-family: "Poppins", serif;
        font-size: 32px;      
        font-weight: 500;

        margin-bottom: 24px;

        color: ${({ theme }) => theme.COLORS.TEXT_LIGHT};
    }

    .CardAlign{
        display: flex;
        gap: 27px;
    }

 
`;



export const Card = styled.div`
     border-radius: 8px;
     border: 1px solid #000204;
     background: var(--Dark-Dark-200, #00070A);;
       
        
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


.NumbeOfPlates{
    display: flex;
    gap: 14px;
    align-items: center;

    > svg{
        font-size: 52px;
        cursor: pointer;
    }
    
}


input{
    background-color: transparent;
    color: white;     
    text-align: center ;
    width: 100%;
    height: 42px;
    justify-content: center;
    align-items: center;

   
    
}  





`;