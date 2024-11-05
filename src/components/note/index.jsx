import { Container, Header, Main, Footer } from "./style";
import { Rating } from "../../components/rating";

import { Tag } from "../../components/tag";

export function Note({ data }) {
  return (
    <Container>
      <Header>
        <h2>{data.title}</h2>
        <Rating value={data.rating} />
      </Header>

      <Main>{data.description}</Main>

      <Footer>
        {data.tags && (
          <div className="tags">
            {data.tags.map((tag) => (
              <Tag title={tag.name} key={tag.id}>
                {tag.name}
              </Tag>
            ))}
          </div>
        )}
      </Footer>
    </Container>
  );
}
