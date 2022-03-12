import { chakra, Box } from '@chakra-ui/react'

export const Card = chakra(Box, {
  baseStyle: {
    bgColor: 'card',
    border: '1px solid',
    borderColor: 'divider',
    borderRadius: 'md',
  },
})
