import { MenuAltRight } from "@styled-icons/boxicons-regular";
import { CloseOutline } from "@styled-icons/evaicons-outline";
import Link from "next/link";
import React from "react";
import * as S from "./styles";

const Header = () => {
  const [menu, setMenu] = React.useState(false);

  const onClickMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <S.HeaderWrapper>
        <S.Container className="container">
          <S.LogoB>
            <Link href="/">B</Link>
          </S.LogoB>
          <S.IconWrapper>
            {menu === true ? (
              <CloseOutline onClick={onClickMenu} size={32} />
            ) : (
              <MenuAltRight onClick={onClickMenu} size={32} />
            )}
            {menu && (
              <S.MainMenu>
                <Link href="/" passHref>
                  <li>Home</li>
                </Link>

                <Link href="/projects" passHref>
                  <li>Projetos</li>
                </Link>
                <Link href="/about" passHref>
                  <li>Sobre</li>
                </Link>
              </S.MainMenu>
            )}
          </S.IconWrapper>
        </S.Container>
      </S.HeaderWrapper>
    </>
  );
};

export default Header;
