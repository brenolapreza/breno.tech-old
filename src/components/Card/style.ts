import styled from "styled-components";

export const ContainerCard = styled.section`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: center;

  @media (max-width: 786px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ProjectCard = styled.div`
  width: 250px;
  height: 300px;
  padding: 1rem;
  margin: 1rem;

  @media (max-width: 786px) {
    width: 80%;
  }

  background-color: var(--dark-blue-600);

  border-radius: 8px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
`;

export const TitleProject = styled.h2`
  padding: 2rem 1rem 1rem 1rem;
`;

export const DescriptionProject = styled.aside`
  color: var(--dark-blue-200);
  padding: 1rem;
  font-size: 1.25rem;
  font-weight: 300;
`;
