import * as S from './style';
import Image from 'next/image';
import BrenoImage from '../../../public/images/BrenoImage.svg';
import {
  GithubOutline,
  LinkedinOutline,
  TwitterOutline,
  EmailOutline,
} from '@styled-icons/evaicons-outline';
import { useEffect, useState } from 'react';
import github from '../../service/api/github';

interface IGithub {
  avatar_url: String;
}

export const HomeTemplate = () => {
  const [githubData, setGithubData] = useState<IGithub>();

  useEffect(() => {
    github.get('').then((res) => setGithubData(res.data));
  }, []);

  const avatar = githubData && githubData.avatar_url;
  return (
    <>
      <div className="container">
        <S.AboutWrapper>
          <S.AboutText>
            <span>Olá 🖖, eu sou</span>
            <h1>Breno Lapreza</h1>
            <span>Desenvolvedor Front-end</span>
            <p>
              Tenho 22 anos. Moro no interior de São Paulo. Gosto muito de
              desenvolver, aprender e práticar.
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
              <a
                href="https://twitter.com/vainisckas"
                rel="noreferrer"
                target="_blank"
              >
                <TwitterOutline width={30} />
              </a>
            </S.SocialWrapper>
          </S.AboutText>
          <S.AboutImage>
            <div>
              <Image
                width={500}
                height={500}
                alt="Foto Breno"
                src={githubData === undefined ? BrenoImage : avatar}
              />
            </div>
          </S.AboutImage>
        </S.AboutWrapper>
      </div>
    </>
  );
};
