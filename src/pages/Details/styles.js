import styled from "styled-components";


export const Container = styled.div`  
  width: 100%;
  height: 100vh;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-x: hidden;
  
  div{
       flex: 1;   
   
  }
 

  /* display: grid;  
  grid-template-rows: 115px auto;
  grid-template-areas: 
  "header"
  "content"
  "footer" ;  */
 
  
  
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20px;
  overflow: auto;
  
 
 
`;

