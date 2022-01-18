import React from 'react';
import { useTheme } from 'next-themes';
import useMounted from '@hooks/useMounted';
import { DarkMode, LightMode } from './themeSwitchStyle';

function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const isMounted: boolean = useMounted();

  const handleSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button onClick={handleSwitch}>
      <>{isMounted && theme === 'dark' ? <DarkMode /> : <LightMode />}</>
    </button>
  );
}

export default ThemeSwitch;
