import { Container, Form, Img } from "./style";
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";

import { Input } from "../../components/input";
import { Button } from "../../components/button";

import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <Container>
      <Img />

      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>

        <div>
          <Input type="text" icon={FiUser} placeholder="Nome" />
          <Input type="text" icon={FiMail} placeholder="E-mail" />
          <Input type="password" icon={FiLock} placeholder="Senha" />
        </div>

        <Button title="Cadastrar" />

        <Link to="/">
          <FiArrowLeft />
          Voltar para o login
        </Link>
      </Form>
    </Container>
  );
}
