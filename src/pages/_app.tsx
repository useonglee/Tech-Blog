import { AppProps } from 'next/app';
import { ThemeProvider as ThemeSwich } from 'next-themes';
import useMounted from '@hooks/useMounted';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@styles/globalStyle';
import Theme from '@styles/Theme';
import './index.css';

function App({ Component, pageProps }: AppProps) {
  const isMounted: boolean = useMounted();

  return (
    <ThemeSwich>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        {isMounted && <Component {...pageProps} />}
      </ThemeProvider>
    </ThemeSwich>
  );
}

export default App;
