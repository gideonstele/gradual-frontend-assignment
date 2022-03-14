import { theme as baseTheme, extendTheme } from '@chakra-ui/react'

import colors from './colors'
import { Breadcrumb } from './components/breadcrumb'
import { NavItem } from './components/nav-item'
import styles from './styles'

export const theme = extendTheme(
  {
    config: {
      cssVarPrefix: 'gradual',
      initialColorMode: 'dark',
      useSystemColorMode: false,
    },
    colors,
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
        brand: {
          default: 'green.500',
          _dark: 'green.500',
        },
      },
    },
    styles,
    components: {
      Breadcrumb,
      NavItem,
    },
  },
  baseTheme
)
