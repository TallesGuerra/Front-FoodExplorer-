import { useState } from "react";

import { api } from "../../services/api";

import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";

import { Container, Form } from "./styles";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();


  function handleSignUp(){
    if(!name || !email || !password){
     return alert("Preencha todos os campos!")
    }

    api.post("/users", { name, email, password })
    .then(() => {
      alert("Usuário cadastrado com sucesso.")
      navigate("/")
    })
    .catch(error =>{
      if(error.response){
        alert(error.response.data.message)
      }else{
        alert("Não foi possível cadastrar o usuário.")
      }
    })

  }

  return (
    <Container>
      <Logo />

      <Form>
        <h1>Crie sua conta</h1>

        <label> Seu Nome
          <Input 
            placeholder="Digite o seu nome"  
            type="text"
            onChange={event => setName(event.target.value)} 
          />
        </label>

        <label> Email
          <Input 
            placeholder="exemplo@exemplo.com" 
            type="text" 
            onChange={event => setEmail(event.target.value)} 
          />
        </label>

        <label> Senha
          <Input
            placeholder="Mínimo 6 caracteres"
            type="password"
            onChange={event => setPassword(event.target.value)} 
          />
        </label>

        <a href="#">
          <Button title="Criar conta"  onClick={handleSignUp} />
        </a>

        <Link to="/" >
          <ButtonText title="Já tenho uma conta" />
        </Link>
      </Form>
    </Container>
  );
}
