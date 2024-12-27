import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { FiUser, FiMail, FiLock } from "react-icons/fi";

import { Container, Form } from "./styles";

export function SignUp() {
  return (
    <Container>
      <Logo />

      <Form>
        <h1>Crie sua conta</h1>

        <label>          
          Seu Nome
          <Input placeholder="Digite o seu nome" type="text" />
        </label>

        <label>
        
          Email
          <Input placeholder="exemplo@exemplo.com" type="text" />
        </label>

        <label>       
          Senha
          <Input
            placeholder="Mínimo 6 caracteres"
            type="password"
                      />
        </label>

        <a href="#">
          <Button title="Criar conta" />
        </a>

        <a href="#">
          <ButtonText title="Já tenho uma conta" />
        </a>
      </Form>
    </Container>
  );
}
