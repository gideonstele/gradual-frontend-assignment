import type { ComponentStyleConfig } from '@chakra-ui/react'

export const NavItem: ComponentStyleConfig = {
  baseStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    color: 'primary',
    fontSize: 'sm',
    lineHeight: 1.5,
    textAlign: 'center',
    _hover: {
      textDecoration: 'underline',
    },
  },
  variants: {
    active: {
      color: 'brand',
      _hover: {
        color: 'brand',
      },
    },
  },
}
