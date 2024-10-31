import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        font-size: 62.5%;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, input, button, textarea{
        font-family: "Roboto Slab", serif;
        outline: none;
        font-size: 1.6rem;
    }

    a{
        text-decoration: none;
    }

    button,a{
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover,a:hover{
        filter: brightness(0.9);
    }

    body{
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_2};
        color: ${({ theme }) => theme.COLORS.WHITE_1};

         -webkit-font-smoothing: antialiased;
    }

    ::-webkit-scrollbar {
        width: .5rem;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.RED};
        border-radius: .6rem;
    }
`;
