import * as S from "./style";
import Image from "next/image";
import BrenoImage from "../../../public/images/BrenoDev.jpg";
import {
  GithubOutline,
  LinkedinOutline,
  TwitterOutline,
  EmailOutline,
} from "@styled-icons/evaicons-outline";
export const HomeTemplate = () => {
  return (
    <>
      <div className="container">
        <S.AboutWrapper>
          <S.AboutText>
            <span>Olá 🖖, eu sou</span>
            <h1>Breno Lapreza</h1>
            <span>Desenvolvedor Front-end</span>
            <p>
              Trabalhando com desenvolvimento web há 3 anos, focando sempre na
              usabilidade e experiência do usuário. Desenvolvedor front end com
              experiência utilizando JavaScript/ReactJS e React Native.
            </p>
            <S.SocialWrapper>
              <a
                href="https://github.com/brenolapreza"
                rel="noreferrer"
                target="_blank"
              >
                <GithubOutline width={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/brenolapreza/"
                rel="noreferrer"
                target="_blank"
              >
                <LinkedinOutline width={30} />
              </a>
              <a
                href="mailto:brenolapreza@gmail.com"
                rel="noreferrer"
                target="_blank"
              >
                <EmailOutline width={30} />
              </a>
            </S.SocialWrapper>
          </S.AboutText>
          <S.AboutImage>
            <div>
              <Image
                width={500}
                height={500}
                alt="Foto Breno"
                src={BrenoImage}
              />
            </div>
          </S.AboutImage>
        </S.AboutWrapper>
      </div>
    </>
  );
};
