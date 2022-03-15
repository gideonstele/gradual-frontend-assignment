import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  HStack,
  Icon,
  IconButton,
  Show,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { useMemo, useRef } from 'react'
import { RiToggleFill } from 'react-icons/ri'

import { TimezoneSwitch } from './components/timezone-switch'
import { UserMenu } from './components/user-menu'
import { Notification } from './components/notification'
import { Inbox } from './components/inbox'
import { Help } from './components/help'
import { DrawerItem } from './components/styled'

export const Operating = () => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const children = useMemo(
    () => (
      <>
        <DrawerItem>
          <TimezoneSwitch />
        </DrawerItem>
        <DrawerItem>
          <Help />
        </DrawerItem>
        <DrawerItem>
          <Inbox />
        </DrawerItem>
        <DrawerItem>
          <Notification />
        </DrawerItem>
        <DrawerItem>
          <UserMenu />
        </DrawerItem>
      </>
    ),
    []
  )
  return (
    <>
      <Show above="md">
        <HStack
          as="ul"
          role="menubar"
          spacing="6"
          justifyItems="center"
          justifyContent="flex-end"
        >
          {children}
        </HStack>
      </Show>
      <Show below="md">
        <IconButton
          pos="absolute"
          right="3"
          ref={buttonRef}
          onClick={onOpen}
          aria-label="toggle operating bar"
          icon={<Icon as={RiToggleFill} />}
        />
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={buttonRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Operating List</DrawerHeader>
            <DrawerBody>
              <VStack
                as="ul"
                alignItems="flex-start"
                flexDirection="column-reverse"
              >
                {children}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Show>
    </>
  )
}
