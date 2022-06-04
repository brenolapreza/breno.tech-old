import styled from "styled-components";

interface PropsProjectCard {
  source: string;
}

export const ProjectCard = styled.div<PropsProjectCard>`
  width: 300px;
  height: 250px;

  background: url(${(props) => props.source});

  border-radius: 8px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);

  cursor: pointer;
  position: relative;

  @media (max-width: 786px) {
    width: 80%;
  }
`;

export const Content = styled.div`
  padding: 1rem;
  opacity: 0;
  width: 100%;
  height: 100%;
  background-color: #1f1f1f;
  transition: opacity 0.4s ease-in-out;

  z-index: 999;
  filter: blur(100);
  position: absolute;

  &:hover {
    opacity: 1;
  }
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
