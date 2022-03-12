import { FC } from 'react'

import { AppHeader } from './header'
import { AppContainer } from './container'

export const AppLayout: FC = ({ children }) => {
  return (
    <>
      <AppHeader />
      <AppContainer>{children}</AppContainer>
    </>
  )
}
