import { Paragraph, Title } from "./style";
import Image from "next/image";
export const AboutTemplate = () => {
  return (
    <div className="container">
      <Title>Sobre...</Title>
      <Paragraph>
        Me chamo Breno Lapreza, sou um desenvolvedor front-end. Desde muito
        cedo, sempre fui muito conectado com a tecnologia. Ganhei meu primeiro
        computador com apenas 6 anos de idade. Me encontrei no mundo da
        programação por volta de 2016/2017, onde caí de paraquedas em um vídeo
        no YouTube de um canal chamado Curso em Vídeo, onde escrevi minhas
        primeiras linhas de código.
      </Paragraph>
      <Paragraph>
        Desde então, me aprofundei no mundo de desenvolvimento front-end/design,
        onde encontrei meu hobbie favorito: fazer cópias de grandes sites da
        internet com HTML e CSS. Foi então, em 2019 que consegui meu primeiro
        estágio e emprego como desenvolvedor, onde era responsável por
        desenvolver sites One Page, utilizando HTML, CSS e JavaScript.{" "}
      </Paragraph>
      <Paragraph>
        Em 2021, por instruções de meu ex-gestor, caí no mundo do ReactJS, já
        que estava muito em alta na época. Desde então, venho estudando e me
        aprofundando cada vez mais. Sou uma pessoa que gosta muito de desafios e
        estou sempre pronto para colocar a mão na massa. Estou tranquilamente
        confiante do meu potencial, sou curioso e venho trabalhando
        perpetuamente para melhorar minhas habilidades, um problema de código de
        cada vez.
      </Paragraph>
    </div>
  );
};
