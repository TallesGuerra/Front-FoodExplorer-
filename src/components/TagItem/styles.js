import styled from "styled-components";

export const Container = styled.div`
    display: flex;   
  
    background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_TAG};

    color: ${({theme}) => theme.COLORS.TEXT_LIGHT};

    border:  ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.BACKGROUND_TAG}` : "none"};

    margin: 8px 0;
    border-radius: 8px;


    > button{
        border: none;
        background: none;
        margin-right: 5px;
    
        color:  ${({theme, isNew}) => isNew ? "white" : "none"};        
    }

    > input {
        color: ${({theme}) => theme.COLORS.TEXT_LIGHT};
        background: transparent;
        
        margin: 0 auto;

        border: none; 
        padding: 12px;

        &::placeholder{
            color: ${({theme}) => theme.COLORS.TEXT_INPUT}

        }
    }
`;