import { Container } from "./style";

import {Tag} from "../../components/tag"

export function Note({ data, children }) {
  return (
    <Container>
      <h2>{data.title}</h2>

      {children}

      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag title={tag.name} key={tag.id}>
              {tag.name}
            </Tag>
          ))}
        </footer>
      )}
    </Container>
  );
}
