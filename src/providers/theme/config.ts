import { theme as baseTheme, extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

import colors from './colors'
import { Breadcrumb } from './components/breadcrumb'
import { NavItem } from './components/nav-item'
import { Input } from './components/input'
import layerStyles from './layer-styles'
import styles from './styles'
import radii from './foundations/radii'

const breakpoints = createBreakpoints({
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
})

export const theme = extendTheme(baseTheme, {
  config: {
    cssVarPrefix: 'gradual',
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  breakpoints,
  colors,
  semanticTokens: {
    colors: {
      background: {
        default: '#ffffff',
        _dark: '#0C0E13',
      },
      Block: {
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
  layerStyles,
  radii,
  components: {
    Breadcrumb,
    NavItem,
    Input,
  },
})
