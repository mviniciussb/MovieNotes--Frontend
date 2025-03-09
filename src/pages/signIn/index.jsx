import { Container, Form, Img } from "./style";
import { FiMail, FiLock } from "react-icons/fi";

import { Input } from "../../components/input";
import { Button } from "../../components/button";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  const navigate = useNavigate();


  function handleSignIn(event) {
    event.preventDefault();
    signIn({ email, password });
    navigate("/");
  }

  function navigation() {
    navigate("/signUp");
  }

  return (
    <Container>
      <Form onSubmit={handleSignIn}>
        {" "}
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo o que assistir.</p>
        <h2>Faça seu login</h2>
        <div>
          <Input
            type="text"
            icon={FiMail}
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            icon={FiLock}
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button title="Entrar" type="submit" />{" "}
        <button type="button" onClick={navigation}>
          Criar conta
        </button>
      </Form>
      <Img />
    </Container>
  );
}
