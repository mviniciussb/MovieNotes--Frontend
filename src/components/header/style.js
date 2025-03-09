import styled from "styled-components";

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

export const Avatar = styled.div`
  display: flex;
  align-items: center; /* Alinha a imagem e a div verticalmente */
  gap: 1rem; /* Espaçamento entre a imagem e a div (ajuste conforme necessário) */

  .user-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;  
    align-items: flex-end;      
    text-align: end;            

    span {
      display: flex;
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.WHITE_3};
    }

    button {
      color: ${({ theme }) => theme.COLORS.GRAY_2};
      background: none;
      border: none;
      width: min-content;
      font-size: 1.6rem;
    }
  }

  > img {
    height: 6.4rem;
    width: 6.4rem;
    border-radius: 50%;
  }
`;
