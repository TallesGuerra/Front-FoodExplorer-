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
        color: ${({ theme }) => theme.COLORS.TEXT_WHITE_COLOR};

        font-weight: 500;
        line-height: 24px;

        text-align: center;
    }
    
    button, a{
        cursor: pointer;
        transition: filter 0.2s;
    }
    

    input {
        color: ${({ theme }) => theme.COLORS.TEXT_INPUT};
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};

        border: none;
        border-radius: 8px;

        height: 48px;
        width: 100%;
        padding: 12px 14px;
        margin-bottom: 32px;


    }


    #formSigIn{
        display: flex;
        flex-direction: column;
        gap: 5px;
        margin-top: 70px;
        align-items: flex-start;


     
    }

`;