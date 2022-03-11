import { FC } from 'react'

import { AppHeader } from './header'

export const AppLayout: FC = ({ children }) => {
  return (
    <>
      <AppHeader />
      {children}
    </>
  )
}
