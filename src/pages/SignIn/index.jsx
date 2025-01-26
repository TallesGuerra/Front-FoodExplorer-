import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";

import { useState } from "react";
import { useAuth } from "../../hooks/auth"
import { Link } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";

import { Container, Form } from "./styles";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();

  function handleSignIn(){
    signIn({ email, password })
  }


  return (
    <Container>
      <Logo />

      <Form>
        <h1>Faça o login</h1>

        <label> Email
          <Input 
            placeholder="exemplo@exemplo.com" 
            type="text" 
            icon={FiMail} 
            onChange={event => setEmail(event.target.value)}
          />
        </label>

        <label> Senha
          <Input
            placeholder="Mínimo 6 caracteres"
            type="password"
            icon={FiLock}
            onChange={event => setPassword(event.target.value)}
          />
        </label>

        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/register">
          <ButtonText title="Criar uma conta" />
        </Link>
      </Form>
    </Container>
  );
}
