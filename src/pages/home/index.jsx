import { Container, Main } from "./style";
import { Header } from "../../components/header";
import { Button } from "../../components/button";
import { Note } from "../../components/note";
import { FiPlus } from "react-icons/fi";

export function Home() {
  return (
    <Container>
      <Header />
      <Main>
        <div className="title-page">
          <h2>Meus filmes</h2>
          <Button to="/createmovie"
            title={
              <>
                <FiPlus />
                Adicionar filme
              </>
            }
          />
        </div>

        <Note
          data={{
            title: "O senhor do Anéis",
            rating: 3,
            description: `Na Terra-Média, há muito tempo, foram forjados vários anéis mágicos:
            três para os Elfos, sete para os Anões e nove para os Homens.
            Secretamente, o Senhor das Trevas Sauron forjou o Um Anel para
            dominar todos os outros. Após uma grande guerra, Sauron foi
            derrotado e perdeu o anel, que acabou encontrado pela criatura
            Gollum e, posteriormente, pelo hobbit Bilbo Bolseiro.`,
            tags: [
              { id: 1, name: "Fantasia" },
              { id: 2, name: "RPG" },
            ],
          }}
        ></Note>

        <Note
          data={{
            title: "Caverna do Dragão",
            rating: 4,
            description: `Hank, Eric, Diana, Presto, Sheila e Bobby – que, após embarcarem em um passeio de montanha-russa em um parque de diversões, são transportados para um reino mágico repleto de criaturas místicas e perigos. Ao chegarem, eles recebem habilidades e armas mágicas de um guia chamado Mestre dos Magos, que os orienta em sua busca para encontrar o caminho de volta para casa.

            No mundo mágico, o grupo enfrenta desafios e inimigos, sendo o mais perigoso o Vingador, um vilão que deseja capturar seus poderes mágicos. Ao            longo da jornada, os jovens exploram reinos fantásticos e aprendem lições sobre coragem, amizade e sacrifício, mas nunca encontram uma maneira            definitiva de retornar ao mundo real, deixando o final da série aberto e cheio de mistério.`,
            tags: [
              { id: 1, name: "Mestre dos Magos" },
              { id: 2, name: "Vingador" },
            ],
          }}
        ></Note>
        
      </Main>
    </Container>
  );
}
