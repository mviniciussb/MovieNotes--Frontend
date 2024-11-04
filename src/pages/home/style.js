import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
`;

export const Main = styled.main`
  max-width: 113.7rem;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  gap: 3.7rem;

  > .title-page {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-weight: 400;
      font-size: 3.2rem;

      color: ${({ theme }) => theme.COLORS.WHITE_2};
    }

    button {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      width: max-content;
      padding: 0 3.2rem;

      svg {
        font-size: 2rem;
      }
    }
  }

  > section {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    max-height: 58vh;
    overflow-y: auto;

    .rating {
      margin-top: 0.4rem;

      svg {
        stroke: ${({ theme }) => theme.COLORS.GRAY_1};
        /* fill: ${({ theme }) => theme.COLORS.GRAY_1}; */
      }
    }

    p {
      color: ${({ theme }) => theme.COLORS.GRAY_1};
      max-height: 5.2rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;

      margin: 1.5rem 0;
    }
  }
`;
