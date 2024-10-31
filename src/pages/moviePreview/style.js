import styled from "styled-components";

export const Container = styled.div`
    
    margin: auto;
`

export const Main = styled.main`
    width: 113.7rem;
    height: 58.1rem;
    margin: auto;

    padding-right: 2.4rem;

    overflow-y: auto;
`

export const Informations = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    overflow-y: auto;

    > a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: .8rem;

    margin-top: 2.1rem;
    color: ${({ theme }) => theme.COLORS.RED};

    svg {
        font-size: 2rem;
    }
  }

  > .title-page {
    display: flex;
    gap: 1.9rem;
    align-items: center;

    h2 {
        font-size: 3.6rem;
        font-weight: 500;

        color: ${({ theme }) => theme.COLORS.WHITE_3};

    }

    .rating {
        display: flex;
        gap: 1rem;
        svg {
            font-size: 2rem;

            stroke: ${({ theme }) => theme.COLORS.GRAY_1};
            /* fill: ${({ theme }) => theme.COLORS.GRAY_1}; */
        }
    }
  }

  > .change {
    display: flex;
    align-items: center;
    gap: .8rem;
    

    img{
        width: 1.6rem;
        height: 1.6rem;

        border-radius: 50%;
    }

    .date {
        display: flex;
        align-items: center;
        gap: .8rem;
    }

    &:nth-child(3){
        svg {
                        stroke: ${({ theme }) => theme.COLORS.RED};

        }
    }
  }
`

export const Tags = styled.div`
     display: flex;
     gap: .8rem;

     margin: 4rem 0;
`
export const Content = styled.p`
    text-align: justify;
    color: ${({ theme }) => theme.COLORS.GRAY_4};
`
