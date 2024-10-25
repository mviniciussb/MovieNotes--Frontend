import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_3};


  display: flex;
  align-items: center;

  width: 100%;

  border: none;
  border-radius: 1rem;
  padding-left: 1.6rem;

  > input {
    color: ${({ theme }) => theme.COLORS.WHITE_1};

    height: 5.6rem;
    width: 100%;

    padding: 1.6rem;

    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_2};
    }
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_2};
    font-size: 2rem;
  }
`;
