import { Container, Form, Img } from "./style";
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";

import { Input } from "../../components/input";
import { Button } from "../../components/button";

import { useNavigate } from "react-router-dom";

import { useState } from "react";

import api from "../../service/api";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleBackHome() {
    navigate("/");
  }

  async function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    try {
      await api.post("/users", { name, email, password });
      alert("Usuário cadastrado com sucesso!");
      navigate("/");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar.");
      }
    }
  }

  return (
    <Container>
      <Img />

      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>

        <div>
          <Input
            type="text"
            icon={FiUser}
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            type="text"
            icon={FiMail}
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            icon={FiLock}
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button title="Cadastrar" onClick={handleSignUp} />

        <button onClick={handleBackHome}>
          <FiArrowLeft />
          Voltar para o login
        </button>
      </Form>
    </Container>
  );
}
