import styled from "styled-components";
import backgroundImg from "../../assets/background-login-img.jpeg";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 63.7rem 1fr;
  grid-template-rows: 1fr;

  height: 100vh;

  grid-template-areas: "login image";
`;

export const Form = styled.form`
  grid-area: login;
  max-width: 34rem;
  margin: -3rem 13.4rem 0;

  display: flex;
  flex-direction: column;

  align-self: center;

  > h1 {
    color: ${({ theme }) => theme.COLORS.RED};
    font-size: 4.8rem;
  }

  > h2 {
    margin: 4.8rem 0 2.4rem;
    font-size: 2.4rem;
    font-weight: 500;

    color: ${({ theme }) => theme.COLORS.GRAY_1};
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_3};
    font-size: 1.4rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    margin-bottom: 2.4rem;
  }

  > button:nth-of-type(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .8rem;

    margin: 4.2rem auto 0;
    color: ${({ theme }) => theme.COLORS.RED};

    background: none;
    border: none;

    max-width: max-content;

    svg {
        font-size: 2rem;
    }
  }
`;

export const Img = styled.div`
  grid-area: image;
  position: relative;

  flex: 1;

  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(35, 33, 41, 0.4);
  }
`;
