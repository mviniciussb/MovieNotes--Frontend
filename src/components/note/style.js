import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.COLORS.RED};

  padding: 3.2rem;

  > h1 {
    color: ${({ thene }) => theme.COLORS.WHITE_3};
    font-size: 2.4rem;
  }

  > p {
    color: ${({ thene }) => theme.COLORS.GRAY_1};
  }
`;