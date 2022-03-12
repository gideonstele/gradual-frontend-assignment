import { QuestionIcon, EmailIcon } from '@chakra-ui/icons'
import {
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
        as={QuestionIcon}
        width="6"
        height="6"
        _hover={{
          cursor: 'pointer',
        }}
      />
      <Portal>
        <MenuList zIndex={4} fontSize="sm">
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
