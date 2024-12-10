import styled from "styled-components";

export const Container = styled.button`
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BTN};
    color: ${({ theme }) => theme.COLORS.TEXT_WHITE};
    font-size: 14px;

    width: 100%;  
    padding: 12px 32px;

    border: none;
    border-radius: 5px;
    
    
    &:disabled{
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BTN_DISABLED};
    }

    &:hover{
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BTN_HOVER};
    }
`;