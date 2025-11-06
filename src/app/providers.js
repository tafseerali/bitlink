'use client';

import { MantineProvider, localStorageColorSchemeManager } from '@mantine/core';
const colorSchemeManager = localStorageColorSchemeManager({
  key: 'mantine-color-scheme',
});

const colors = {
    darkCustom: ["#f1f5f8","#e4e8ea","#c4cfd7","#a1b6c4","#84a0b3","#7192a9","#678ba5","#567891","#4a6b82","#273f4f"],
    blueCustom: ["#e5f3ff", "#cde2ff", "#9ac2ff", "#64a0ff", "#3884fe", "#1d72fe", "#0063ff", "#0058e4", "#004ecd", "#0043b5"],
    orangeCustom: ["#ffeee3","#ffdbcc","#ffb79a","#ff8f64","#fe7743","#fe5919","#fe4d08","#e33e00","#cb3500","#b12a00"],
    grayCustom: ["#fef2f5","#eae6e7","#d7d7d7","#b2b2b2","#9a9a9a","#8b8b8b","#848484","#717171","#676465","#5e5457"],
    blackCustom: ['darkgray']
};

export function Providers({ children }) {
  const theme = {
    colors: colors,
    primaryColor: 'blueCustom',
    fontFamily: 'Open Sans, sans-serif',
    colors: {
        ...colors,
        dark: colors.blackCustom,
    },
  };

  return (
    <MantineProvider 
      theme={theme} 
      defaultColorScheme="auto" 
      colorSchemeManager={colorSchemeManager}
    >
      {children}
    </MantineProvider>
  );
}