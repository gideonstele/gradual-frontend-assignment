import { Flex, Box } from '@chakra-ui/react'
import { FC } from 'react'

import { Card } from '@components/card'

import { Navbar } from './components/navbar'

export const AppContainer: FC = ({ children }) => {
  return (
    <Flex alignItems="stretch" height="calc(100% - 80px)" width="100%">
      <Card borderLeftRadius={0} width="98px" py="6">
        <Navbar />
      </Card>
      <Box mx="3">{children}</Box>
    </Flex>
  )
}
