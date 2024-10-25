import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_4};

  font-weight: 500;

  border-radius: 1rem;
  border: none;

  height: 5.6rem;
  width: 100%;

  padding: 1.6rem 0;

  &:disabled {
    opacity: 0.5;
  }
`;
