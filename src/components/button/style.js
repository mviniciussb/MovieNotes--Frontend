import styled from "styled-components";

export const Container = styled.button`

  background-color: ${({ theme }) => theme.COLORS.RED};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_2};

  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 1rem;
  border: none;

  height: 5.6rem;
  min-width: 20rem;

  padding: 1.6rem 0;

  &:disabled {
    opacity: 0.5;
  }
`;
