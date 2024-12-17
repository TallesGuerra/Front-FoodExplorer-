import styled from "styled-components";

export const Container = styled.button`
    background: none;
    color: ${({theme, $isactive }) => 
        $isactive ? theme.COLORS.TEXT_LIGHT : theme.COLOS.TEXT_BLUE};

    border: none;
    font-size: 14px;

    margin: 5px;

    &:hover{
        color: ${({theme }) => theme.COLORS.TEXT_BLUE};
    }

    
`;