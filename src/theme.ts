import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  borderRadius: '999px',
  colors: {
    secondaryColor: '#F08319',
    primaryColor: '#027A9D',
    dark: '#0f0f0f',
    background: '#FAFEFF',
    greyDark: '#838388',
  },
};

export type Colors = keyof typeof theme['colors']
