import styled from "styled-components";

export const Container = styled.div`
  height: 100%;

`;

export const Form = styled.form`
  width: 113.7rem;
  height: 58.1rem;
  margin: 2rem auto 0;

  padding-right: 2.4rem;
  overflow-y: auto;

  > a {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 2.4rem;

    color: ${({ theme }) => theme.COLORS.RED};
  }

  > h1 {
    font-weight: 500;
    font-size: 3.6rem;
    color: ${({ theme }) => theme.COLORS.WHITE_3};
  }

  > .input-wrapper {
    display: flex;
    gap: 4rem;
    margin: 4rem 0;
  }

  > h3 {
    margin: 4rem 0 2.4rem;
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.GRAY_1};
  }

  > .markers {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1};

    display: flex;
    gap: 2.4rem;

    border-radius: 0.8rem;
    padding: 1.6rem;
    margin-bottom: 4rem;
  }

  > .buttons {
    display: flex;
    gap: 4rem;

    margin-bottom: 5rem;
    

    button:nth-child(1) {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1};
      color: ${({ theme }) => theme.COLORS.RED};
    }
  }
`;
