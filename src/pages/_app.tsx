import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider as ThemeSwich } from 'next-themes';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@styles/globalStyle';
import Theme from '@styles/Theme';
import './index.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
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
