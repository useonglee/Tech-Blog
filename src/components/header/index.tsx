import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ThemeSwitch from '@components/themeSwitch';
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
  const { name, menu } = SiteConfig;
  const router = useRouter();
  const [isShowMobileMenu, setIsShowMobileMenu] = useState<boolean>(false);

  const handleShowMenu = () => {
    setIsShowMobileMenu((prev) => !prev);
  };

  useEffect(() => {
    const CONVERT_MENU = {
      post: '게시글',
      review: '업무 회고',
    };

    const curPageName: string = CONVERT_MENU[router.pathname.split('/')[1]];

    if (curPageName === undefined) {
      return;
    }

    const menus = document.querySelectorAll('.header__menu');
    const filterClickedMenu = Array.from(menus).filter(
      (menu) => menu.textContent === curPageName,
    )[0];

    filterClickedMenu.classList.add('active');
  }, []);

  return (
    <HeaderStyle isScroll={isScroll}>
      <MobileMenuButton
        isShowMobileMenu={isShowMobileMenu}
        onClick={handleShowMenu}
      >
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
        {menu.map(({ label, path }) => (
          <li key={label}>
            <Link href={path}>
              <a className="header__menu">{label}</a>
            </Link>
          </li>
        ))}
      </HeaderMenu>
      <ThemeSwitch />
    </HeaderStyle>
  );
}

export default Header;
