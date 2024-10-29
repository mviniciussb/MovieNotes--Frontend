import styled from "styled-components";

export const Container = styled.main`
    height: 100vh;

    header{
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1};
        height: 14.4rem;

        display: flex;
        align-items: center;
        padding-left: 14.4rem;

        > a {
            display: flex;
            align-items: center;
            gap: .8rem;

            color: ${({ theme }) => theme.COLORS.RED};

            svg {
                font-size: 2rem;
            }
        }
    }
`

export const Form = styled.form`
    max-width: 34rem;
    margin: -9rem auto 0;

    > .input-wrapper{
        display: flex;
        flex-direction: column;
        gap: .8rem;
    }

    > .input-wrapper:nth-child(odd){
        margin: 2.4rem 0;
    }

`

export const Avatar = styled.div`
        border-radius: 50%;
        background-color: red;


    > label {
        border-radius: 50%;
    }

    >img {
        height: 18.6rem;
        width: 18.6rem;
    }

    
`