import React, { useState } from 'react';
import Link from 'next/link';
// import ThemeSwitch from '@components/themeSwitch';
import {
  HeaderMenu,
  HeaderStyle,
  LogoBox,
  MobileMenuButton,
} from './headerStyle';
import { SiteConfig } from '@config';

interface HeaderPropsType {
  isScroll?: boolean;
}

function Header({ isScroll }: HeaderPropsType) {
  const { name } = SiteConfig;
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);

  const handleShowMenu = () => {
    setIsShowMenu((prev) => !prev);
  };

  return (
    <HeaderStyle isScroll={isScroll}>
      <MobileMenuButton isShowMenu={isShowMenu} onClick={handleShowMenu}>
        <span />
        <span />
        <span />
      </MobileMenuButton>
      <LogoBox>
        {/* <Link href="/">
          <a>
            <ImageTag
              src="/images/profile.jpg"
              width="58px"
              height="58px"
              circle="50%"
              alt="프로필 사진"
            />
          </a>
        </Link> */}
        <h2>
          <Link href="/">
            <a>{name}</a>
          </Link>
        </h2>
      </LogoBox>
      <HeaderMenu>
        {SiteConfig.menu.map((link) => (
          <li key={link.label}>
            <Link href={link.path}>{link.label}</Link>
          </li>
        ))}
      </HeaderMenu>
      {/* <ThemeSwitch /> */}
    </HeaderStyle>
  );
}

export default Header;
