import React from 'react';
import Head from 'next/head';
import Header from '@components/header';
import Footer from '@components/footer';
import useScrolling from '@hooks/useScrolling';
import { LayoutPropsType } from 'types/layout';
import { SiteConfig } from '@config';

function MainLayout({ children }: LayoutPropsType) {
  const { siteTitle } = SiteConfig;

  return (
    <>
      <Head>
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <Header isScroll={useScrolling()} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;
