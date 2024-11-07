import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  width: 100%;
  padding: 2.4rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  border-bottom: 0.1rem solid ${({ theme }) => theme.COLORS.BACKGROUND_5};

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_2};

  > h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.RED};
  }

  > .input-wrapper {
    width: 58.2rem;
  }
`;

export const Avatar = styled(Link)`
  display: flex;
  gap: 0.9rem;

  > .user-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: end;

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
