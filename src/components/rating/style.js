import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: .6rem;

    svg {
        stroke: ${({ theme }) => theme.COLORS.GRAY_1};
        
        &.active {
            stroke: none;
            fill: ${({ theme }) => theme.COLORS.RED};
        }
    }
`;