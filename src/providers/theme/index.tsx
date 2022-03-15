import { ChakraProvider } from '@chakra-ui/react'
import { FC } from 'react'

import { theme } from './config'

export const ThemeProvider: FC = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
