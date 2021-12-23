import Head from 'next/head';
import Link from 'next/link';
import Header from '@components/header';
import styles from './layout.module.css';
import LayoutPropsType from './layoutType';
import { LayoutStyle } from './layoutStyle';
import { SiteConfig } from '@config';

function Layout({ children, home }: LayoutPropsType) {
  const { siteTitle } = SiteConfig;

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
      <Header />
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </LayoutStyle>
  );
}

export default Layout;
