import { Container, Form, Avatar } from "./style";
import { FiArrowLeft, FiLock, FiMail, FiUser, FiCamera } from "react-icons/fi";
import { Input} from "../../components/input"
import { Button } from "../../components/button";

import { Link } from "react-router-dom";


export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
          Voltar
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/mviniciussb.png" alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" />
          </label>
        </Avatar>

        <div class="input-wrapper">
          <Input icon={FiUser} placeholder="Usuário" />
          <Input icon={FiMail} placeholder="E-mail" />
        </div>

        <div class="input-wrapper">
          <Input icon={FiLock} placeholder="Senha" />
          <Input icon={FiLock} placeholder="Nova senha" />
        </div>

        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
