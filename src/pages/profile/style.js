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

    > button {
        margin-bottom: 6rem;
    }

`

export const Avatar = styled.div`
        position: relative;
        margin: 0 auto 6.4rem;
        height: 18.6rem;
        width: 18.6rem;
        

        

    > img {
        height: 18.6rem;
        width: 18.6rem;
        border-radius: 50%;

        display: flex;
        justify-self: center;
    }


    > label {
        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        bottom: .8rem;
        right: .8rem;

        width: 4.8rem;
        height: 4.8rem;

        padding: 1.4rem;
        border-radius: 50%;

        background-color: ${({ theme }) => theme.COLORS.RED};


        input {
            display: none;
        }

        svg {
            color: ${({ theme }) => theme.COLORS.BACKGROUND_4};
            font-size: 2rem;
        }

        cursor: pointer;
    }
    
`