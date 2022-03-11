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
    avatar: 'https://avatars3.githubusercontent.com/u/8186664?s=460&v=4',
    email: 'luna.chen@somemail.com',
  },
  loginOut: () =>
    set(draft => {
      draft.auth.auth = undefined
    }),
})
