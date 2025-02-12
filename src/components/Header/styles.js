/* import { Link } from "react-router-dom";
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
 */

import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 11.4rem;
  width: 100%;
  padding: 5.6rem 2.8rem 2.4rem;
  display: flex;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_300};
  
  button:last-child {
    width: auto;
    padding: 0;
    background: none;
  }
  
  @media (min-width: 1024px) {
    height: 9.6rem;
    padding: 2.4rem 12.3rem;

    justify-content: space-between;
    gap: 3.2rem;

    .favorites {
      border: 0;
      background: none;

      line-height: 100%;

      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
    
    .new, .orders {
      max-width: 21.6rem;
    }
  }
`;

export const Menu = styled.button`
  border: none;
  background: none;

  display: flex;
  align-items: center;
  gap: 1.6rem;
  
  color: ${({ theme }) => theme.COLORS.WHITE};

  .fi-menu-icon {
    width: 2.4rem;
    height: 1.8rem;
  }

  span {
    font-size: 2.1rem;
  }
`;

export const Brand = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: 16.1rem;
  }

  @media (min-width: 1024px) {
    width: auto;

    > img {
      width: 19.7rem;
    }
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  display: flex;
  align-items: center;
  
  color: ${({ theme }) => theme.COLORS.WHITE};
`;