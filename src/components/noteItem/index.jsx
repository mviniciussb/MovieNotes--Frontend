import { Container } from "./style.js";
import { FiX, FiPlus } from "react-icons/fi";

export function NoteItem({ isNew, value, onClick, ...rest }) {
  return (
    <Container $isNew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />

      <button onClick={onClick} type="button">
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}
