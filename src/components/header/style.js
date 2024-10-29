import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  padding: 2.4rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_2};

  > h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.RED};
  }

  > div {
    /* width: 58.2rem; */
    background-color: red;
  }
`;

export const Avatar = styled.div`
  display: flex;
  gap: .9rem;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
      display: flex;
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.WHITE_3};
    }

    a {
      color: ${({ theme }) => theme.COLORS.GRAY_2};
    }
  }

  > img {
    height: 6.4rem;
    width: 6.4rem;
    border-radius: 50%;
    border: 0.1rem solid ${({ theme }) => theme.COLORS.BACKGROUND_5};
  }
`;