import styled from "styled-components";

export const ContainerCard = styled.section`
  padding-top: 4rem;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;

  align-items: center;
  justify-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 786px) {
    grid-template-columns: 1fr;
  }
`;

export const TitleProject = styled.h2`
  font-size: 2rem;
  text-transform: uppercase;
`;

export const Title = styled.h2`
  padding-top: 2rem;
`;
