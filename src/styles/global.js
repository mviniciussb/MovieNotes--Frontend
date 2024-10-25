import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

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
        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: .6rem;
    }
`;
