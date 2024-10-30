import { Container, Main } from "./style";
import { Header } from "../../components/header";
import { Button } from "../../components/button";
import { FiPlus } from "react-icons/fi";

export function Home() {
  return (
    <Container>
      <Header />
      <Main>
        <div className="title-page">
          <h1>
            Meus filmes
            <Button
              title={
                <>
                  <FiPlus />
                  Adicionar filme
                </>
              }
            />
          </h1>
        </div>
      </Main>
    </Container>
  );
}
