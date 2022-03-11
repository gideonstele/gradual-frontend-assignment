import create, {
  GetState,
  Mutate,
  SetState,
  State,
  StateCreator,
  StoreApi,
} from 'zustand'
import { produce } from 'immer'
import { devtools } from 'zustand/middleware'
import createContext from 'zustand/context'
import { FC } from 'react'

import { createTimezoneSlice, TimezoneSlice } from './timezone'
import { createAuthSlice, AuthInfoSlice } from './auth'

import type { Draft } from 'immer'

export type SetStateProduce<T extends State> = (
  partial: ((draft: Draft<T>) => void) | T,
  replace?: boolean
) => void

const immer =
  <
    T extends State,
    CustomSetState extends SetState<T>,
    CustomGetState extends GetState<T>,
    CustomStoreApi extends StoreApi<T>
  >(
    config: StateCreator<T, SetStateProduce<T>, CustomGetState, CustomStoreApi>
  ): StateCreator<T, CustomSetState, CustomGetState, CustomStoreApi> =>
  (set, get, api) =>
    config(
      (partial, replace) => {
        const nextState =
          typeof partial === 'function'
            ? produce(partial as (state: Draft<T>) => T)
            : (partial as T)
        return set(nextState, replace)
      },
      get,
      api
    )

export type RootState = {
  timezone: TimezoneSlice
  auth: AuthInfoSlice
}

const createStore = () =>
  create<
    RootState,
    SetState<RootState>,
    GetState<RootState>,
    Mutate<StoreApi<RootState>, [['zustand/devtools', never]]>
  >(
    devtools(
      immer((set, get) => ({
        timezone: createTimezoneSlice(set, get),
        auth: createAuthSlice(set, get),
      })),
      { name: 'prefix' }
    )
  )

const { Provider, useStore } = createContext<RootState>()

export { useStore }

export const StoreProvider: FC = ({ children }) => {
  return <Provider createStore={createStore}>{children}</Provider>
}
