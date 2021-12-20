import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import utilStyles from '@styles/utils.module.css';
import { HeaderName, HeaderStyle } from './headerStyle';
import { SiteConfig } from '@config';

const Header = ({ home }: any) => {
  const { name } = SiteConfig;

  return (
    <HeaderStyle>
      {home ? (
        <>
          <Image
            priority
            src="/images/profile.jpg"
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt={name}
          />
          <HeaderName>{name}</HeaderName>
        </>
      ) : (
        <>
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
        </>
      )}
    </HeaderStyle>
  );
};

export default Header;
