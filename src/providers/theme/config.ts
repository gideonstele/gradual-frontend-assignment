import { theme as baseTheme, extendTheme } from '@chakra-ui/react'

import { Breadcrumb } from './styles/breadcrumb'
export const theme = extendTheme(
  {
    config: {
      cssVarPrefix: 'gradual',
      initialColorMode: 'dark',
      useSystemColorMode: false,
    },
    semanticTokens: {
      colors: {
        background: {
          default: '#ffffff',
          _dark: '#0C0E13',
        },
        card: {
          default: '#f2f2f2',
          _dark: '#1D1C21',
        },
        primary: {
          default: '#0C0E13',
          _dark: '#C9C7D0',
        },
        secondary: {
          default: '#8a8f98',
          _dark: '#7B798F',
        },
      },
    },
    styles: {
      global: {
        'html, body': {
          backgroundColor: 'background',
          color: 'primary',
          lineHeight: '1.5',
        },
      },
    },
    components: {
      Breadcrumb,
    },
  },
  baseTheme
)
