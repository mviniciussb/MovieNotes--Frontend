import { FiStar } from "react-icons/fi";

import { Container } from "./style";

export function Rating({ data }) {
  return (
    <Container>
      {[...Array(5)].map((_, index) => (
        <FiStar key={index} className={index < data.rating ? "active" : ""} />
      ))}
    </Container>
  );
}
