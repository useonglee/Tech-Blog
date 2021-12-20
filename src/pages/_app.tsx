import { AppProps } from 'next/app';
import useMounted from '@hooks/useMounted';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@styles/globalStyle';
import Theme from '@styles/Theme';

export default function App({ Component, pageProps }: AppProps) {
  const mounted: boolean = useMounted();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        {mounted && <Component {...pageProps} />}
      </ThemeProvider>
    </>
  );
}
