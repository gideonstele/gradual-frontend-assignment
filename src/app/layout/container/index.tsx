import { Flex } from '@chakra-ui/react'
import { FC } from 'react'

import { Block } from '@components/block'

import { Navbar } from './components/navbar'

export const AppContainer: FC = ({ children }) => {
  return (
    <Flex alignItems="stretch" height="calc(100% - 80px)" width="100%">
      <Block borderLeftRadius={0} width="108px" py="6" ml="-1">
        <Navbar />
      </Block>
      <Flex mx="3" flex={1}>
        {children}
      </Flex>
    </Flex>
  )
}
