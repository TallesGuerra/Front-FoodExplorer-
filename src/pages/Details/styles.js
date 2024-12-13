import styled from "styled-components";


export const Container = styled.div`  
  width: 100%;
  height: 100vh;

  display: grid;  
  grid-template-rows: 115px auto;
  grid-template-areas: 
  "header"
  "content" ; 

  main{
    grid-area: content;
    padding: 64px 0;

    overflow-y: scroll;
  }
`;

export const Content = styled.div`
  max-width: 550px ;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > button:first-child{
    align-self: self-start;
  }

`;

