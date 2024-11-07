import { Container, Form, Img } from "./style";
import { FiMail, FiLock } from "react-icons/fi";

import { Input } from "../../components/input";
import { Button } from "../../components/button";

import {Link} from "react-router-dom"

export function SignIn() {
  return (
    <Container>
      <Form>
        
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
          <h2>Faça seu login</h2>
        

        <div>
          <Input type="text" icon={FiMail} placeholder="E-mail" />
          <Input type="password" icon={FiLock} placeholder="Senha" />
        </div>

        <Button title="Entrar" />

        <Link to="/signup">Criar conta</Link>
      </Form>
      <Img/>
    </Container>
  );
}
