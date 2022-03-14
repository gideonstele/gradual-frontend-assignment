import { ChakraTheme } from '@chakra-ui/react'

const styles: ChakraTheme['styles'] = {
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
}

export default styles
