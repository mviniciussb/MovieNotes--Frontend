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

  > .rating{
    margin-top: .4rem;

    svg {
      stroke: ${({ theme }) => theme.COLORS.GRAY_1};
      /* fill: ${({ theme }) => theme.COLORS.GRAY_1}; */

    }
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    max-height: 5.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
     display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    margin: 1.5rem 0;
  }
`;