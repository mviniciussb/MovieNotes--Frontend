import { Container, Main } from "./style";
import { Header } from "../../components/header";
import { Button } from "../../components/button";
import { Note } from "../../components/note";
import { Tag } from "../../components/tag";
import { FiStar, FiPlus } from "react-icons/fi";

export function Home() {
  return (
    <Container>
      <Header />
      <Main>
        <div className="title-page">
          <h2>Meus filmes</h2>
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
            data={{
              title: "O senhor do Anéis",
              tags: [
                {
                  id: 1,
                  name: "Fantasia",
                },
                {
                  id: 2,
                  name: "RPG",
                },
              ],
            }}
          >
            <div className="rating">
              <FiStar />
              <FiStar />
              <FiStar />
              <FiStar />
              <FiStar />
            </div>

            <p>
              Na Terra-Média, há muito tempo, foram forjados vários anéis
              mágicos: três para os Elfos, sete para os Anões e nove para os
              Homens. Secretamente, o Senhor das Trevas Sauron forjou o Um Anel
              para dominar todos os outros. Após uma grande guerra, Sauron foi
              derrotado e perdeu o anel, que acabou encontrado pela criatura
              Gollum e, posteriormente, pelo hobbit Bilbo Bolseiro.
            </p>

          </Note>
        </section>
      </Main>
    </Container>
  );
}
