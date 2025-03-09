import { Container, Avatar } from "./style";

import {Input} from "../../components/input"

export function Header(){
    return (
      <Container>
        <h1>RocketMovies</h1>

        <div className="input-wrapper">
          <Input placeholder="Pesquisar pelo título" />
        </div>

        <Avatar>
          <div className="user-wrapper">
            <span >Marcos Vinicius</span>
            <a href="#">sair</a>
          </div>

          <img
            src="https://github.com/mviniciussb.png"
            alt="Imagem do usuário"
          />
        </Avatar>
      </Container>
    );
}