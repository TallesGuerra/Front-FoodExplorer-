import { Container, Title } from "./styles";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";
import { Header } from "../../components/Header";


export function Details() {
  return (
    //conteúdo da interface
    <Container>
      <Title>  
        <Logo/>
          <Header />


          <Button title="Entrar" />
          <Button title="Cadastrar"/>
          <Button title="Voltar"/>

        <a href="#">Criar uma conta</a>
      </Title>
    </Container>
  );
}




----------------------------------------------

import styled from "styled-components";


export const Container = styled.div`  
  width: 428px;
  height: 100vh;

  display: flex;  
  align-items: center;  
  justify-content: center; 
  margin: 0 auto; 
`;

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    img{
      margin-top: 50%;
    }
    
`;
