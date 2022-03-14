import { Routes, Route, Link } from 'react-router-dom'

import { AppLayout } from 'app/layout'
import { Start } from 'app/modules/start'
import { Hub } from 'app/modules/hub'

import { StoreProvider } from './stores'
import { ThemeProvider } from './providers/theme'
import { RTCProvider } from './providers/rtc'

export const App = () => {
  return (
    <ThemeProvider>
      <StoreProvider>
        <AppLayout>
          <RTCProvider>
            <Routes>
              <Route path="/" element={<Start />} />
              <Route path="/hub" element={<Hub />} />
            </Routes>
          </RTCProvider>
        </AppLayout>
      </StoreProvider>
    </ThemeProvider>
  )
}
