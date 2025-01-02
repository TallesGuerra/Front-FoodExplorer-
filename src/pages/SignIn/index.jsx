import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";


import { FiLogIn, FiMail, FiLock } from "react-icons/fi";

import { Container, Form } from "./styles";

export function SignIn() {
  return (
    <Container>
      <Logo />

      <Form>
        <h1>Faça o login</h1>

        <label>
          {" "}
          Email
          <Input placeholder="exemplo@exemplo.com" type="text" icon={FiMail} />
        </label>

        <label>
          {" "}
          Senha
          <Input
            placeholder="Mínimo 6 caracteres"
            type="password"
            icon={FiLock}
          />
        </label>

        <Button title="Entrar" />

        <Link to="/register">
          <ButtonText title="Criar uma conta" />
        </Link>
      </Form>
    </Container>
  );
}
