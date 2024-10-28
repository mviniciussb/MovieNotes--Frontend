import { Container, Form } from "./style";
import { FiArrowLeft, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Input} from "../../components/input"
import { Button } from "../../components/button";


export function Profile() {
  return (
    <Container>
      <header>
        <a href="#">
          <FiArrowLeft />
          Voltar
        </a>
      </header>

      <Form>
        <figure>
          <img src="https://github.com/mviniciussb.png" alt="Foto do usuário" />
        </figure>

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
