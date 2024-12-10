import styled from "styled-components";

export const Container = styled.button`
    background: none;
    color: ${({theme }) => theme.COLORS.TEXT_LIGHT};

    border: none;
    font-size: 14px;

    margin: 5px;

    &:hover{
        color: ${({theme }) => theme.COLORS.TEXT_BLUE};
    }
`;