import { GetState } from 'zustand'

import { RootState, SetStateProduce } from './index'

export interface TimezoneItem {
  name: string
  alternativeName: string
}

export const timezones: TimezoneItem[] = [
  {
    name: 'Chicago',
    alternativeName: 'America/Chicago',
  },
  {
    name: 'Toronto',
    alternativeName: 'America/Toronto',
  },
  {
    name: 'Los Angeles',
    alternativeName: 'America/Los_Angeles',
  },
  {
    name: 'London',
    alternativeName: 'Europe/London',
  },
  {
    name: 'Auckland',
    alternativeName: 'Pacific/Auckland',
  },
  {
    name: 'Shanghai',
    alternativeName: 'Asia/Shanghai',
  },
  {
    name: 'Tokyo',
    alternativeName: 'Asia/Tokyo',
  },
]

export interface TimezoneSlice {
  timezone: TimezoneItem
  setTimezone: (timezone: TimezoneItem) => void
}

export const createTimezoneSlice = (
  set: SetStateProduce<RootState>,
  _get: GetState<RootState>
) => ({
  timezone: timezones[0],
  setTimezone: (timezone: TimezoneItem) =>
    set(draft => {
      draft.timezone.timezone = timezone
    }),
})
