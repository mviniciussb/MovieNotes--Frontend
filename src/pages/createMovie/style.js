import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
`;

export const Form = styled.form`
  width: 113.7rem;

  > a {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    color: ${({ theme }) => theme.COLORS.RED};
  }

  > h1 {
    font-weight: 500;
    font-size: 3.6rem;
    color: ${({ theme }) => theme.COLORS.WHITE_3};
  }

  > .input-wrapper{
    display: flex;
    gap: 4rem;
  }
`;
