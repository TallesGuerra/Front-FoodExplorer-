import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;

    height: 80px;
    width: 100%;
    padding: 24px 123px;
    gap: 32px;

    background: ${({theme}) => theme.COLORS.BACKGROUND_HEADER};

    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-around;
   
    
    svg {
        color: ${({theme}) => theme.COLORS.TEXT_WHITE};
       font-size: 32px;
       
    }
   

    img{
          width: 150px;     
    }

        
    ::placeholder{
            font-style: italic;            
        } 

   button{
    display: flex;
    width: min-content;
    padding: 10px 22px;
    justify-content: center;
    align-items: center;
    gap: 2px;

    color: white;
}



`;

export const Logout = styled.button`
    border: none;
    background-color: transparent;  
    display: flex;
    align-items: center;
    justify-content: center; 

    svg{
       font-size: 1.5rem;
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
