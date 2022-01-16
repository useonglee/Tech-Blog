import { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { LayoutStyle } from './layoutStyle';
import { SiteConfig } from '@config';

interface LayoutPropsType {
  children: React.ReactNode;
  home?: boolean;
}

function Layout({ children, home }: LayoutPropsType) {
  const { siteTitle } = SiteConfig;
  const url = new URL(window.location.href);
  const curPage = url.pathname.split('/')[1];

  const [isScroll, setIsScroll] = useState<boolean>(false);

  const handleScrollEvent = useCallback(() => {
    if (window.pageYOffset > 0) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  return (
    <LayoutStyle>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header isScroll={isScroll} />
      <main>{children}</main>
      {!home && (
        <div>
          <Link href={`/${curPage}`}>
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <Footer />
    </LayoutStyle>
  );
}

export default Layout;
