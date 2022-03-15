import type { ComponentStyleConfig } from '@chakra-ui/react'

export const Input: ComponentStyleConfig = {
  parts: ['input'],
  baseStyle: {
    input: {
      color: 'gray.900',
      bgColor: 'gray.100',
      _hover: {
        bgColor: 'white',
      },
      _active: {
        bgColor: 'white',
      },
      _disabled: {
        color: 'gray.500',
      },
    },
  },
  defaultProps: {
    variant: 'filled',
  },
}
