import { CardPortifolio } from "../../components/CardPortifolio";
import { ContainerCard } from "./style";

export const ProjectsTemplate = () => {
  return (
    <>
      <ContainerCard>
        <CardPortifolio
          title="Inicio"
          description="Oloquinho meu"
          image={"images/image.jpg"}
        />
        <CardPortifolio
          title="Inicio"
          description="Oloquinho meu"
          image={"images/image.jpg"}
        />
        <CardPortifolio
          title="Inicio"
          description="Oloquinho meu"
          image={"images/image.jpg"}
        />
      </ContainerCard>
    </>
  );
};
