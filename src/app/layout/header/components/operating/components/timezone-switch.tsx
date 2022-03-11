import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
  HStack,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { RiEarthLine } from 'react-icons/ri'
import { FC, useCallback } from 'react'

import { useStore } from 'stores'
import { TimezoneItem, timezones } from 'stores/timezone'
import dayjs from 'utils/moment'

export const TimezoneSwitch: FC = () => {
  const { timezone, setTimezone } = useStore(state => state.timezone)

  const tz = dayjs().tz(timezone.alternativeName)

  const onClick = useCallback(
    (item: TimezoneItem) => {
      setTimezone(item)
    },
    [setTimezone]
  )

  return (
    <Menu>
      <MenuButton
        as={Link}
        width="auto"
        height="8"
        mx="3"
        color="secondary"
        _hover={{
          cursor: 'pointer',
          color: 'primary',
        }}
      >
        <HStack height="100%" alignItems="center">
          <RiEarthLine size="24px" />
          <strong>
            UTC - {tz.format('HH:mm')} {timezone.name}
          </strong>
          <ChevronDownIcon mx="2" />
        </HStack>
      </MenuButton>
      <MenuList fontSize="sm">
        {timezones.map(tz => (
          <MenuItem key={tz.name} onClick={() => onClick(tz)}>
            {tz.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}
