import { Container, Form } from "./style";
import { FiMail, FiLock } from "react-icons/fi";

import { Input } from "../../components/input";
import { Button } from "../../components/button";


export function SignIn() {
  return (
    <Container>
      <header>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
      </header>

      <Form>
        <h2>Faça seu login</h2>

        <Input type="text" icon={FiMail} placeholder="E-mail" />
        <Input type="password" icon={FiLock} placeholder="Senha" />

        <Button title="Entrar"/>
      </Form>
    </Container>
  );
}
