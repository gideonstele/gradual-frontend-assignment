import { GetState } from 'zustand'

import { RootState, SetStateProduce } from './index'

export interface AuthInfo {
  username: string
  avatar: string
  email: string
}

export interface AuthInfoSlice {
  auth?: AuthInfo
  loginOut: () => void
}

export const createAuthSlice = (
  set: SetStateProduce<RootState>,
  _get: GetState<RootState>
) => ({
  auth: {
    username: 'Luna Chen',
    avatar: 'https://i.pravatar.cc/150?u=mcOMUpFF7gYKWWhhz8T7w',
    email: 'luna.chen@somemail.com',
  },
  loginOut: () =>
    set(draft => {
      draft.auth.auth = undefined
    }),
})
