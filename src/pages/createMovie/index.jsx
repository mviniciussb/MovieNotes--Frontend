import { Container, Form } from "./style";

import { FiArrowLeft } from "react-icons/fi";

import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { TextArea } from "../../components/textarea";
import { Button } from "../../components/button";
import {NoteItem} from "../../components/noteItem"

import { Link } from "react-router-dom";


export function CreateMovie() {
  return (
    <Container>
      <Header />

      <Form>
        <Link to="/">
          <FiArrowLeft />
          Voltar
        </Link>

        <h2>Novo filme</h2>

        <div className="input-wrapper">
          <Input placeholder="Título" />
          <Input placeholder="Sua nota (de 0 a 5)" />
        </div>

        <TextArea placeholder="Observações" />

        <h3>Marcadores</h3>
        <div className="markers">
          <NoteItem value="React" placeholder="Novo marcador" />
          <NoteItem isNew={true} placeholder="Novo marcador" />
        </div>

        <div className="buttons">
          <Button title="Excluir filme" />
          <Button title="Salvar alterações" />
        </div>
      </Form>
    </Container>
  );
}
