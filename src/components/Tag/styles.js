import styled  from "styled-components";

export const Container = styled.span`
    font-size: 12px;
    padding: 4px 8px;
    justify-content: center;
    align-items: center;

    border-radius: 5px;
    background-color: ${({theme})=> theme.COLORS.BACKGROUND_BTN_DARK};
    color: ${({theme})=> theme.COLORS.TEXT_WHITE};

    margin-right: 12px;
`;