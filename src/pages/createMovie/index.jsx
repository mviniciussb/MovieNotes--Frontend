import { Container, Form } from "./style";

import { FiArrowLeft } from "react-icons/fi";

import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { TextArea } from "../../components/textarea";

export function CreateMovie() {
  return (
    <Container>
      <Header />

      <Form>
        <a href="#">
          <FiArrowLeft />
          Voltar
        </a>
        <h2>Novo filme</h2>

        <div className="input-wrapper">
          <Input placeholder="Título" />
          <Input placeholder="Sua nota (de 0 a 5)" />
        </div>

        <TextArea placeholder="Observações" />
      </Form>
    </Container>
  );
}
