import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  align-items: center;
  border-radius: 1rem;
  
  background-color: ${({ theme, $isNew }) =>
        $isNew ? "transparent" : theme.COLORS.BACKGROUND_3};
  color: ${({ theme, $isNew }) =>
        $isNew ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE_1};
  border: ${({ theme, $isNew }) =>
        $isNew ? `.2rem dashed ${theme.COLORS.BACKGROUND_3}` : "none"};

  > button {
    padding-right: 1.6rem;
    border: none;
    background: none;

    svg {
      color: ${({ theme }) => theme.COLORS.RED};
      font-size: 2rem;
    }
  }

  > input {
    height: 5.6rem;
    padding: 1.2rem 2.5rem;
    color: ${({ theme }) => theme.COLORS.WHITE_1};
    background: transparent;
    border: 0;
    width: 15rem;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_2};
    }
  }
`;