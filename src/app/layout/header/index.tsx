import { Avatar, chakra, HStack, Show, Stack } from '@chakra-ui/react'
import { FC } from 'react'

import logo from './components/logo.png'
import { Breadcrumb } from './components/breadcrumb'
import { Operating } from './components/operating'

const StyledAppHeader = chakra('header', {
  baseStyle: {
    position: 'sticky',
    zIndex: 3,
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'background',
    height: '60px',
    width: 'full',
  },
})

export const AppHeader: FC = () => {
  return (
    <StyledAppHeader>
      <HStack
        height="100%"
        width="100%"
        spacing="3"
        justifyContent="space-between"
        paddingInlineStart="6"
        paddingInlineEnd="6"
        flexWrap={{
          base: 'wrap',
          md: 'nowrap',
        }}
      >
        <Stack
          alignItems="center"
          justifyContent={{
            base: 'center',
            md: 'flex-start',
          }}
          direction={{
            base: 'column',
            md: 'row',
          }}
          minWidth={{
            base: '100%',
            md: '50%',
          }}
        >
          <Avatar src={logo} rounded="full" width="8" height="8" mr="3" />
          <Show above="md">
            <Breadcrumb />
          </Show>
        </Stack>
        <Operating />
      </HStack>
    </StyledAppHeader>
  )
}
