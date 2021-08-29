import { Theme } from './Prop';

export interface colorSet {
  base: string
  highlight: string
  darken: string
}

export interface Palette {
  background: string;
  color: string;
  primary: colorSet;
  secondary: colorSet;
}

export const AppTheme: Record<Theme, Palette> = {
  Light: {
    background: '#f2f2f2',
    color: '#121414',
    primary: {
      base: '#2196f3',
      highlight: '#6ec6ff',
      darken: '#0069c0'
    },
    secondary: {
      base: '#cddc39',
      highlight: '#ffff6e',
      darken: '#99aa00'
    }
  },
  Dark: {
    background: '#f2f2f2',
    color: '#121414',
    primary: {
      base: '#2196f3',
      highlight: '#6ec6ff',
      darken: '#0069c0'
    },
    secondary: {
      base: '#cddc39',
      highlight: '#ffff6e',
      darken: '#99aa00'
    }
  }
}