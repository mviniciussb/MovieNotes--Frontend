import { FiStar } from "react-icons/fi";
import { Container } from "./style";

export function Rating({ value = 0 }) {
  // valor padrão de 0 se nenhum for passado
  return (
    <Container>
      {[...Array(5)].map((_, index) => (
        <FiStar key={index} className={index < value ? "active" : ""} />
      ))}
    </Container>
  );
}
