import { chakra, Box, HStack, StackProps, BoxProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

export const Block = chakra(Box, {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    bgColor: 'Block',
    border: '1px solid',
    borderColor: 'divider',
    borderRadius: 'md',
  },
})

export interface BlockHeaderProps extends Omit<StackProps, 'title' | 'prefix'> {
  withBorder?: boolean
  title?: ReactNode
  titleProps?: BoxProps
  prefix?: ReactNode
}

export const BlockHeader = ({
  withBorder,
  children,
  title,
  prefix,
  titleProps,
  ...props
}: BlockHeaderProps) => {
  return (
    <HStack
      as="header"
      padding="3"
      spacing="3"
      sx={{
        borderBottom: withBorder ? '1px solid' : 'none',
        borderColor: 'divider',
      }}
      {...props}
    >
      {title !== undefined ? (
        <>
          {prefix}
          <Box as="h2" {...titleProps}>
            {title}
          </Box>
        </>
      ) : (
        children
      )}
    </HStack>
  )
}

export const BlockBody = chakra(Box, {
  baseStyle: {
    padding: '3',
    flex: 1,
  },
})

export const BlockFooter = chakra(Box, {
  baseStyle: {
    padding: '3',
  },
})
