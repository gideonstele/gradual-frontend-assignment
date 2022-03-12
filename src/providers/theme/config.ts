import { theme as baseTheme, extendTheme } from '@chakra-ui/react'

import { Breadcrumb } from './styles/breadcrumb'
import { NavItem } from './styles/nav-item'

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
        divider: {
          default: '#eaeaea',
          _dark: '#26252D',
        },
        primary: {
          default: '#0C0E13',
          _dark: '#C9C7D0',
        },
        secondary: {
          default: '#8a8f98',
          _dark: '#7B798F',
        },
        agora: {
          default: '#04B17D',
          _dark: '#04B17D',
        },
      },
    },
    styles: {
      global: {
        'html, body': {
          backgroundColor: 'background',
          color: 'primary',
          lineHeight: '1.5',
          width: '100%',
          height: '100%',
        },
        body: {
          display: 'flex',
        },
        '#root': {
          flex: 1,
          width: '100%',
          height: '100%',
          overflow: 'overlay',
        },
      },
    },
    components: {
      Breadcrumb,
      NavItem,
    },
  },
  baseTheme
)
