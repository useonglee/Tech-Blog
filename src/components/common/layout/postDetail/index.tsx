import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from '@components/footer';
import Header from '@components/header';
import useScrolling from '@hooks/useScrolling';
import { LayoutPropsType } from 'types/layout';
import { SiteConfig } from '@config';
import { PostLayoutStyle } from './style';

function PostDetailLayout({ children }: LayoutPropsType) {
  const { siteTitle } = SiteConfig;
  const router = useRouter();
  const prevPage = router.pathname.split('/')[1];

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
      <PostLayoutStyle>
        {children}
        <div>
          <Link href={`/${prevPage}`}>
            <a>← Back to home</a>
          </Link>
        </div>
      </PostLayoutStyle>
      <Footer />
    </>
  );
}

export default PostDetailLayout;
