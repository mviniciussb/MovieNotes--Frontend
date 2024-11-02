import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 22.2rem;
  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_3};

  cursor: pointer;

  padding: 3.2rem;

  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE_2};
    font-size: 2.4rem;
  }
`;
