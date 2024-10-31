import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    
`

export const Main = styled.main`
    max-width: 113.7rem;
    margin: 5rem auto;
    display: flex;
    flex-direction: column;
    gap: 3.7rem;
    
    > .title-page{
        display: flex;
        justify-content: space-between;
        align-items: center;

        h2 {
            font-weight: 400;
            font-size: 3.2rem;

            color: ${({theme}) => theme.COLORS.WHITE_2};
        }


        button {
            display: flex;
            align-items: center;
            gap: .8rem;
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
    }
`;