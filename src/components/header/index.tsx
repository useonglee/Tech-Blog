import React from 'react';
import Link from 'next/link';
import utilStyles from '@styles/utils.module.css';
import { HeaderRightContent, HeaderStyle, LogoBox } from './headerStyle';
import { SiteConfig } from '@config';
import ImageTag from '@components/imageTag';
import ThemeSwitch from '@components/themeSwitch';

function Header() {
  const { name } = SiteConfig;

  return (
    <HeaderStyle>
      <LogoBox>
        <Link href="/">
          <a>
            <ImageTag
              src="/assets/images/profile.jpg"
              width="58px"
              height="58px"
              circle="true"
              alt="프로필 사진"
            />
          </a>
        </Link>
        <h2>
          <Link href="/">
            <a>{name}</a>
          </Link>
        </h2>
      </LogoBox>
      <HeaderRightContent>
        <div>
          {SiteConfig.menu.map((link) => (
            <Link key={link.label} href={link.path}>
              {link.label}
            </Link>
          ))}
        </div>
        <ThemeSwitch />
      </HeaderRightContent>
    </HeaderStyle>
  );
}

export default Header;
