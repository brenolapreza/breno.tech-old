import { CardPortifolio } from "../../components/CardPortifolio";
import { ContainerCard, Title } from "./style";

export const ProjectsTemplate = () => {
  return (
    <div className="container">
      <Title>Alguns projetos...</Title>
      <ContainerCard>
        <a
          href="https://trackercovid.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <CardPortifolio
            title="Trabalho de conclusão de curso"
            description="Consumindo uma API - COVID-2019"
            image={"images/image.jpg"}
          />
        </a>
        <a
          href="https://relaxed-vacherin-759754.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <CardPortifolio
            title="TODO"
            description="TODO feito em ReactJS"
            image={"images/todo.svg"}
          />
        </a>
        <a
          href="http://omni-landing-page.5c229a012f6e48ce9675.brazilsouth.aksapp.io/"
          target="_blank"
          rel="noreferrer"
        >
          <CardPortifolio
            title="Landing Page OMNICHANNEL"
            description="Landing page feita com NextJS, GraphCMS, GraphQL e TypeScript."
            image={"images/omni-2.svg"}
          />
        </a>
        <a
          href="http://omni.akivasoftware.com.br/"
          target="_blank"
          rel="noreferrer"
        >
          <CardPortifolio
            title="Plataforma OMNICHANNEL"
            description="Desenvolvida com NextJS e Chakra UI."
            image={"images/omni.svg"}
          />
        </a>
        <a
          href="https://rad-beijinho-55ea3d.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <CardPortifolio
            title="Social"
            description="Rede social desenvolvida com ReactJS."
            image={"images/social.svg"}
          />
        </a>
        <a
          href="https://admirable-stardust-5c8bca.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <CardPortifolio
            title="TMDB"
            description="Desenvolvido com ReactJS - Consumindo API pública TMDB"
            image={"images/films.svg"}
          />
        </a>
        <a
          href="https://clever-sherbet-f6c49c.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <CardPortifolio
            title="Headprize"
            description="Página desenvolvida como desafio de CSS"
            image={"images/headprize.svg"}
          />
        </a>
      </ContainerCard>
    </div>
  );
};
