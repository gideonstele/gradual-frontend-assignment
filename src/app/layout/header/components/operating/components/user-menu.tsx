import { ChevronDownIcon, ArrowBackIcon } from '@chakra-ui/icons'
import { Menu, MenuButton, MenuList, MenuItem, Avatar } from '@chakra-ui/react'

import { useStore } from 'stores'

export const UserMenu = () => {
  const authStore = useStore(state => state.auth)

  return (
    <Menu>
      <MenuButton
        as={Avatar}
        rightIcon={<ChevronDownIcon />}
        src={authStore.auth?.avatar}
        rounded="full"
        width="8"
        height="8"
        mx="3"
        _hover={{
          cursor: 'pointer',
        }}
      />
      <MenuList fontSize="sm">
        <MenuItem>
          <span>{authStore.auth?.username}</span>
        </MenuItem>
        <MenuItem>
          <span>{authStore.auth?.email}</span>
        </MenuItem>
        <MenuItem>
          <ArrowBackIcon boxSize="6" mr="3" />
          <span>Logout</span>
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
