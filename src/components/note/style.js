import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_3};

  cursor: pointer;

  padding: 3.2rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: .4rem;

  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE_2};
    font-size: 2.4rem;
  }
`

export const Main = styled.main`

  
      color: ${({ theme }) => theme.COLORS.GRAY_1};
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    
`
export const Footer = styled.footer`

    > .tags {
      display: flex;
      gap: .8rem;
    }
`
