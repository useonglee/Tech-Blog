import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider as ThemeSwich } from 'next-themes';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@styles/globalStyle';
import Theme from '@styles/Theme';
import Head from 'next/head';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          as="font"
          rel="stylesheet preload prefetch"
          href="/font.css"
          crossOrigin="anonymous"
        />
      </Head>
      <GlobalStyle />
      <ThemeSwich>
        <ThemeProvider theme={Theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ThemeSwich>
    </>
  );
}

export default App;
