import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;

    height: 80px;
    width: 100%;
    padding: 24px 123px;
    gap: 32px;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER};

    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-around;
   
    
    svg {
    color: ${({ theme }) => theme.COLORS.TEXT_WHITE};
    font-size: 32px;
    }


    img{
        width: 150px;     
    }

        
    ::placeholder{
            font-style: italic;            
        } 

    .btnNew  button{
    display: flex;
    min-width: 215px;

    justify-content: center;
    align-items: center;
    gap: 8px;

    color: ${({ theme }) => theme.COLORS.TEXT_WHITE};
}
`;

export const Logout = styled(Link)`
    border: none;
    background-color: transparent;  
    display: flex;
    align-items: center;
    justify-content: center; 

    svg{
       font-size: 1.5rem;
    }

    svg:hover{
      color:  ${({ theme }) => theme.COLORS.TEXT_BLUE};
    }

   
    
`;

export const Search = styled.input`
        color: ${({ theme }) => theme.COLORS.TEXT_BLUE};
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};

        border: none;
        border-radius: 8px;
               
        width: 50%;
        padding: 12px 14px;      
        
       

`;
