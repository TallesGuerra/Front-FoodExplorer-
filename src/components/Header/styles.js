import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;

    height: 90px;
    width: 100%;

    background: ${({theme}) => theme.COLORS.BACKGROUND_HEADER};

    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-around;
    
    margin: 0 auto;
    
    svg {
        color: ${({theme}) => theme.COLORS.TEXT_WHITE};
       font-size: 32px;
    }
   

    img{
        margin: 0 auto;
        width: 146px;     
    }

        
    ::placeholder{
            font-style: italic;            
        }

    svg{
    font-size: auto;
   }

`;

export const Logout = styled.button`
    border: none;
    background-color: transparent;  
    display: flex;
    align-items: center;
    justify-content: center; 
  
    
`;

export const Search = styled.input`
        color: ${({ theme }) => theme.COLORS.TEXT_BLUE};
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};

        border: none;
        border-radius: 8px;
               
        width: 500px;
        padding: 12px 14px;      
        
       

`;

