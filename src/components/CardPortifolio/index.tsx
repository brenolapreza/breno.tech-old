import {
  Content,
  DescriptionProject,
  ProjectCard,
  TitleProject,
} from "./style";

interface PropsCardPortifolio {
  title: string;
  description: string;
  image: string;
}

export const CardPortifolio = ({
  title,
  description,
  image,
}: PropsCardPortifolio) => {
  return (
    <>
      <ProjectCard source={image}>
        <Content>
          <TitleProject>{title}</TitleProject>
          <DescriptionProject>{description}</DescriptionProject>
        </Content>
      </ProjectCard>
    </>
  );
};
