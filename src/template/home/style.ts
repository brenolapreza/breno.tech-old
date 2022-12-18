import styled from "styled-components";

export const AboutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: calc(100vh - 80px);

  @media (max-width: 786px) {
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    height: 100%;
  }
`;

export const AboutText = styled.div`
  max-width: 420px;
  width: 100%;
  line-height: 1.7rem;
  padding: 2rem 0;
  span {
    font-size: 1.4rem;
    font-weight: bold;
    margin: 4px;
  }

  h1 {
    font-size: 4.4rem;
    font-weight: bold;
    line-height: 88.2%;
    margin: 8px 0px;
    text-transform: uppercase;
  }

  p {
    font-size: 1.2rem;
    margin: 8px 4px;
    color: var(--third-color);
    font-weight: 300;
  }
`;

export const AboutImage = styled.div`
  div {
    width: 360px;
    height: 360px;
    border-radius: 100%;
    background: var(--background-logo);
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);
    transition: 0.5s;
    &:hover {
      box-shadow: 0px 0px 12px rgba(86, 125, 184, 0.25);
    }

    img {
      position: relative;
      box-shadow: (0px 0px 12px rgba(0, 0, 0, 0.25));
      filter: grayscale(100%);
      border-radius: 100%;
      transition: 0.5s;
      background: var(--background-logo);
      box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);
      transition: 0.5s;

      &:hover {
        filter: grayscale(0%);
        box-shadow: 0px 0px 12px rgba(86, 125, 184, 0.25);
      }
    }
  }
`;

export const SocialWrapper = styled.div`
  a {
    &:first-child {
      margin: 0 8px 0px 0px;
    }
    margin: 2px 12px;
    padding: 1px;
    cursor: pointer;
  }

  svg {
    color: var(--main-color);
    transition: 0.5s;

    &:hover {
      color: var(--third-color);
    }
  }
`;
