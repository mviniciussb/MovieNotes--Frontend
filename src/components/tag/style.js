import styled from "styled-components";

export const Container = styled.span`
    color: ${({theme}) => theme.COLORS.WHITE_2};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_4};

    border-radius: .8rem;
    text-align: center;
    font-size: 1.2rem;
    padding: .5rem 1.6rem;
`