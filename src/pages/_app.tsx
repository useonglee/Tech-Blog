import { AppProps } from 'next/app';
import useMounted from '@hooks/useMounted';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@styles/globalStyle';
import Theme from '@styles/Theme';

function App({ Component, pageProps }: AppProps) {
  const isMounted: boolean = useMounted();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        {isMounted && <Component {...pageProps} />}
      </ThemeProvider>
    </>
  );
}

export default App;
