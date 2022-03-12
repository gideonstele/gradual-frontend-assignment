import { chakra } from '@chakra-ui/react'

export const DrawerItem = chakra('li', {
  baseStyle: {
    listStyle: 'none',
    px: {
      base: '3',
      md: '0',
    },
    py: {
      base: '3',
      md: '0',
    },
    height: {
      base: 'auto',
      md: '100%',
    },
    width: {
      base: '100%',
      md: 'auto',
    },
    lineHeight: {
      base: '3',
      md: '100%',
    },
    borderBottom: {
      base: '1px solid',
      md: 'none',
    },
    borderColor: 'whiteAlpha.300',
  },
})
