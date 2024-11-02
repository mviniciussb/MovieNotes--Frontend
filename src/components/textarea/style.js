import styled from "styled-components";

export const Container = styled.textarea`
  padding: 1.6rem 1.9rem;
  height: 23.6rem;
  width: 100%;
  resize: none;

  color: ${({ theme }) => theme.COLORS.WHITE_1};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_3};
  border-radius: 1rem;
  border: none;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_2};
  }
`;
