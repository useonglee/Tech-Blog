import React from 'react';
import { useTheme } from 'next-themes';

function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      themeSwitch
    </button>
  );
}

export default ThemeSwitch;
