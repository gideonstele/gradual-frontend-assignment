import { QuestionIcon, EmailIcon } from '@chakra-ui/icons'
import {
  HStack,
  Show,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
  Portal,
} from '@chakra-ui/react'

export const Help = () => {
  return (
    <Menu placement="top">
      <MenuButton
        _hover={{
          cursor: 'pointer',
        }}
      >
        <HStack>
          <QuestionIcon width="6" height="6" />
          <Show below="md">
            <span>Helps</span>
          </Show>
        </HStack>
      </MenuButton>
      <Portal>
        <MenuList zIndex="popover" fontSize="sm">
          <MenuItem
            as={Link}
            href="https://docs.agora.io/en/Video/landing-page?platform=Web"
            isExternal
          >
            Document Site
          </MenuItem>
          <MenuItem as={Link} href="https://www.gradual.com/" isExternal>
            Privacy Policy
          </MenuItem>
          <MenuItem as={Link} href="mailto:info@gradual.com" isExternal>
            Contact Us. <EmailIcon mx="2" />
          </MenuItem>
        </MenuList>
      </Portal>
    </Menu>
  )
}
