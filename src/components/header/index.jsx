import { Container, Avatar } from "./style";
import { useAuth } from "../../hooks/auth.jsx";
import api from "../../service/api.js";
import avatarPlaceholder from "../../assets/person.png";
import { useNavigate } from "react-router-dom";

import { Input } from "../../components/input";

export function Header() {
  const { signOut, user } = useAuth();

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const navigate = useNavigate();

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  return (
    <Container>
      <h1>RocketMovies</h1>

      <div className="input-wrapper">
        <Input placeholder="Pesquisar pelo título" />
      </div>

      <Avatar>
        <div className="user-wrapper">
          <span>Marcos Vinicius</span>
          <button onClick={handleSignOut}>Sair</button>
        </div>

        <img src="https://github.com/mviniciussb.png" alt="Imagem do usuário" />
      </Avatar>
    </Container>
  );
}
