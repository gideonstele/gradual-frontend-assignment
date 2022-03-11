import type { ComponentStyleConfig } from '@chakra-ui/react'

export const Breadcrumb: ComponentStyleConfig = {
  parts: ['link', 'separator'],
  baseStyle: {
    link: {
      color: 'secondary',
      fontSize: 'md',
      _hover: {
        color: 'primary',
      },
      '&[aria-current="page"]': {
        color: 'primary',
        fontWeight: 'bold',
      },
    },
    separator: {
      color: 'secondary',
      mx: '3',
    },
  },
}
