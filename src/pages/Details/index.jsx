import { Container, Title } from "./styles";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";


export function Details() {
  return (
    //conteúdo da interface
    <Container>
      <Title>  
        <Logo/>

        <form id="formSigIn">
          <label htmlFor="email">Email</label>

          <input
            type="email"
            name="teste1"
            id="adasdas"
            placeholder="exemplo@exemplo.com.br"
          />

          <label htmlFor="email">Senha</label>
          <input
            type="password"
            name="password"            
            placeholder="No mínimo 6 caracteres"
          />
        </form>

          <Button title="Entrar" />
          <Button title="Cadastrar"/>
          <Button title="Voltar"/>

        <a href="#">Criar uma conta</a>
      </Title>
    </Container>
  );
}
