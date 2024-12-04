import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BODY};
        color: ${({ theme }) => theme.COLORS.TEXT_WHITE_COLOR};

        -webkit-font-smoothing: antialiased;
        font-family: "Roboto", serif;
    }

    input, button, textarea, a {
        font-family: "Poppins", serif;
        outline: none;
    }

    a {
        text-decoration: none;        
    }

    button, a{
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover{
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BTN_HOVER};
    }


`;