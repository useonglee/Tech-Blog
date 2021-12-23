import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import utilStyles from '@styles/utils.module.css';
import { HeaderRightContent, HeaderStyle, LogoBox } from './headerStyle';
import { SiteConfig } from '@config';
import ImageTag from '@components/imageTag';

function Header() {
  const { name } = SiteConfig;

  return (
    <HeaderStyle>
      <LogoBox>
        <Link href="/">
          <a>
            <ImageTag type="profile" circle alt="프로필 사진" />
          </a>
        </Link>
        <h2 className={utilStyles.headingLg}>
          <Link href="/">
            <a className={utilStyles.colorInherit}>{name}</a>
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
        <button>theme</button>
      </HeaderRightContent>
    </HeaderStyle>
  );
}

export default Header;
