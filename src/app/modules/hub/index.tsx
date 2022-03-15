import { HStack, Tag } from '@chakra-ui/react'
import { useMemo } from 'react'

import { Block, BlockHeader, BlockBody } from '@components/block'

import { Chat } from './components/chat'
import { Video } from './components/video'

export const Hub = () => {
  const status = useMemo(
    () => (
      <Tag variant="subtle" colorScheme="green" borderRadius="sm">
        1:1 Match
      </Tag>
    ),
    []
  )

  return (
    <HStack spacing="3" flex="1">
      <Block flex="1" height="100%">
        <BlockHeader
          withBorder
          prefix={status}
          title="How to have a great career in a lifetime"
        />
        <BlockBody>
          <Video />
        </BlockBody>
      </Block>
      <Chat />
    </HStack>
  )
}
