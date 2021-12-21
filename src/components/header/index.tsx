import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import utilStyles from '@styles/utils.module.css';
import { HeaderRightContent, HeaderStyle, LogoBox } from './headerStyle';
import { SiteConfig } from '@config';

function Header() {
  const { name } = SiteConfig;

  return (
    <HeaderStyle>
      <LogoBox>
        <Link href="/">
          <a>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={108}
              width={108}
              alt={name}
            />
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
