import { ChakraTheme } from '@chakra-ui/react'

const layerStyles: ChakraTheme['layerStyles'] = {
  base: {
    bg: 'background',
    color: 'primary',
    borderColor: 'gray.90',
  },
  Block: {
    bg: 'Block',
    color: 'primary',
    borderColor: 'divider',
  },
  child: {
    bg: 'whiteAlpha.50',
    color: 'primary',
    borderColor: 'whiteAlpha.20',
  },
}

export default layerStyles
