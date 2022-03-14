import { GetState } from 'zustand'

import { RootState, SetStateProduce } from './index'

export interface AgoraState {
  appid: string
  token: string
  channel: string
}

export interface AgoraSlice {
  value: AgoraState
  setAppid: (appid: string) => void
  setToken: (token: string) => void
  setChannel: (channel: string) => void
  setAgora: (value: Partial<AgoraState>) => void
}

export const createAgoraSlice = (
  set: SetStateProduce<RootState>,
  _get: GetState<RootState>
) => ({
  value: {
    appid: 'f7b9c793ad4c4f6693e2c4f978984833',
    token: '857870a36951440589edafef8116472d',
    channel: '1ffd399a711bbe36ac4407c9c618a79f',
  },
  setAppid: (appid: string) =>
    set(draft => {
      draft.agora.value.appid = appid
    }),
  setToken: (token: string) =>
    set(draft => {
      draft.agora.value.token = token
    }),
  setChannel: (channel: string) =>
    set(draft => {
      draft.agora.value.channel = channel
    }),
  setAgora: (value: Partial<AgoraState>) =>
    set(draft => {
      draft.agora.value = {
        ...value,
        ...draft.agora.value,
      }
    }),
})
