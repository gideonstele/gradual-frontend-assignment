import { AppLayout } from 'app/layout'

import { StoreProvider } from './stores'
import { ThemeProvider } from './providers/theme'

export const App = () => {
  return (
    <ThemeProvider>
      <StoreProvider>
        <AppLayout></AppLayout>
      </StoreProvider>
    </ThemeProvider>
  )
}
