import { Container, Main } from "./style";

import { Header } from "../../components/header";
import { Button } from "../../components/button";
import {Note} from "../../components/note"

import { FiPlus } from "react-icons/fi";

export function Home() {
  return (
    <Container>
      <Header />
      <Main>
        <div className="title-page">
          <h1>Meus filmes</h1>

          <Button
            title={
              <>
                <FiPlus />
                Adicionar filme
              </>
            }
          />
        </div>

        <section>
          <Note
            title="Interestellar"
          />
        </section>
      </Main>
    </Container>
  );
}
