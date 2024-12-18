import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${({theme}) => theme.COLORS.TEXT_LIGHT};  

    > button{
        border: none;
        background: transparent;
        color: ${({theme}) => theme.COLORS.TEXT_LIGHT};
        transition: filter 0.2s; 

        &:hover{
            filter: brightness(0.9);
        }

    }

    .BtnAdd{
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_BTN};;
    }
    .BtnAdd:hover{
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_BTN_HOVER};
       
       
    }

  
    
    input{
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

input::-webkit-inner-spin-button { 
    -webkit-appearance: none;   

}


`;