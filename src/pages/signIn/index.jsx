import { Container, Form } from "./style";
import { FiMail } from "react-icons/fi";

import { Input } from "../../components/input";

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
      </Form>
    </Container>
  );
}
