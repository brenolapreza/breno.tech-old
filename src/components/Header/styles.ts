import styled from "styled-components";

export const HeaderWrapper = styled.header`
  height: 80px;
  background: var(--main-color);
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Container = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const LogoB = styled.div`
  width: 50px;
  height: 50px;

  border-radius: 100%;
  background: var(--background-logo);

  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;

  transition: background 0.5s ease-in-out;

  cursor: pointer;

  a {
    font-size: 45px;
    font-family: "Wire One", sans-serif;
    text-decoration: none;
    color: var(--secundary-color);
  }
  &:hover {
    background: var(--color-hover);
  }
`;

// ICON

export const IconWrapper = styled.div`
  svg {
    position: relative;
    z-index: 999;
  }
`;

export const MainMenu = styled.ul`
  width: 100%;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 998;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  list-style: none;

  background: #000010e3;

  a {
    color: #fff;
    font-size: 1.6rem;
    text-transform: uppercase;
    text-decoration: none;
    padding: 0.5rem;
    margin-bottom: 1rem;
    transition: 0.4s;

    &:hover {
      background: var(--color-hover);
    }
  }
`;
