import { HStack } from '@chakra-ui/react'

import { TimezoneSwitch } from './components/timezone-switch'
import { UserMenu } from './components/user-menu'
import { Notification } from './components/notification'
import { Inbox } from './components/inbox'
import { Help } from './components/help'

export const Operating = () => {
  return (
    <HStack spacing="6" alignContent="flex-end">
      <TimezoneSwitch />
      <Help />
      <Inbox />
      <Notification />
      <UserMenu />
    </HStack>
  )
}
