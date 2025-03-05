import { Container, Form, Img } from "./style";
import { FiMail, FiLock } from "react-icons/fi";

import { Input } from "../../components/input";
import { Button } from "../../components/button";

import {Link} from "react-router-dom"

import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function SignIn() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const {signIn} = useAuth()

  function handleSignIn(){
    signIn({email, password})
  }
  

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>

        <div>
          <Input
            type="text"
            icon={FiMail}
            placeholder="E-mail"
            onChange={e => setEmail(e.target.value)}
          />
          <Input type="password" icon={FiLock} placeholder="Senha" onChange={e => setPassword(e.target.value)}/>
        </div>

        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/signup">Criar conta</Link>
      </Form>
      <Img />
    </Container>
  );
}
