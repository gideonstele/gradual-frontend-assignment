import { HStack } from '@chakra-ui/react'

import { TimezoneSwitch } from './components/timezone-switch'
import { UserMenu } from './components/user-menu'

export const Operating = () => {
  return (
    <HStack alignContent="flex-end">
      <TimezoneSwitch />
      <UserMenu />
    </HStack>
  )
}
