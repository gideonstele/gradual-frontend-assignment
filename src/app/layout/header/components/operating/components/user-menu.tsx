import { ArrowBackIcon } from '@chakra-ui/icons'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Box,
  HStack,
  Portal,
  Show,
} from '@chakra-ui/react'

import { useStore } from 'stores'

export const UserMenu = () => {
  const authStore = useStore(state => state.auth)

  return (
    <Menu>
      <MenuButton
        _hover={{
          cursor: 'pointer',
        }}
      >
        <HStack spacing="2">
          <Avatar
            src={authStore.auth?.avatar}
            rounded="full"
            width="8"
            height="8"
          />
          <Show below="md">
            <Box>{authStore.auth?.username}</Box>
          </Show>
        </HStack>
      </MenuButton>
      <Portal>
        <MenuList zIndex="popover" fontSize="sm">
          <MenuItem>
            <span>{authStore.auth?.email}</span>
          </MenuItem>
          <MenuItem>
            <ArrowBackIcon boxSize="6" mr="3" />
            <span>Logout</span>
          </MenuItem>
        </MenuList>
      </Portal>
    </Menu>
  )
}
