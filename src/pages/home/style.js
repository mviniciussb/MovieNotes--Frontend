import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  overflow-y: hidden;
  `
  ;

export const Main = styled.main`
  max-width: 113.7rem;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  padding-right: 1.6rem;

  > .title-page {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-weight: 400;
      font-size: 3.2rem;
      color: ${({ theme }) => theme.COLORS.WHITE_2};
    }

    button {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      width: max-content;
      padding: 0 3.2rem;

      svg {
        font-size: 2rem;
      }
    }
  }

  > .all-notes-pages {
    display: flex;
    flex-direction: column;
    gap: 3.7rem;
    margin-top: 5rem;
    height: 40rem;
    overflow-y: auto;  /* Aqui está o overflow-y adicionado */
    padding-right: 0.6rem;
  }
`;
