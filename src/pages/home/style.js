import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
`

export const Main = styled.main`
    max-width: 113.7rem;
    margin: 5rem auto;
    
    > .title-page{
        display: flex;
        justify-content: space-between;
        align-items: center;

        h1 {
            font-weight: 400;
            font-size: 3.2rem;
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
`;