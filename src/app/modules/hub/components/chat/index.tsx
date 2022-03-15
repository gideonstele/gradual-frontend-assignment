import { VStack } from '@chakra-ui/react'

import { Block, BlockHeader, BlockBody, BlockFooter } from '@components/block'

import { InputMessage } from './components/input-message'
import { Card } from './components/card'
import { ChatItem } from './components/chat-item'

export const Chat = () => {
  return (
    <Block flex={1} height="100%" justifyContent="space-between">
      <BlockHeader
        titleProps={{
          fontWeight: 'bold',
          color: 'gray.200',
          fontSize: 'lg',
        }}
        title="You are chatting with:"
      />
      <BlockBody>
        <Card />
        <VStack spacing="5">
          <ChatItem
            name="Eduardo Mckinney"
            avatar="https://i.pravatar.cc/90?u=MZ4GS4K_oeMyHDlK7JznS"
            character="Attendee"
            characterProps={{
              colorScheme: 'blue',
            }}
            title="Principle Engineer @ App Dynamics"
            message="Thanks everyone for joining the virtual booth!"
          />
          <ChatItem
            name="Gladys Murphy"
            avatar="https://i.pravatar.cc/90?u=hO79lfh88SHw4grqxC1zh"
            character="Diamond Sponsor"
            characterProps={{
              colorScheme: 'cyan',
              fontWeight: 'bold',
            }}
            title="ELC Team"
            message='Stay tuned for our next conversation about "Technical Decision Making for the Long-Term"'
          />
          <ChatItem
            name="Eduardo Mckinney"
            avatar="https://i.pravatar.cc/90?u=MZ4GS4K_oeMyHDlK7JznS"
            character="Attendee"
            characterProps={{
              colorScheme: 'blue',
            }}
            title="Principle Engineer @ App Dynamics"
            message="Thanks everyone for joining the session! Let me know what your favorite part was"
          />
        </VStack>
      </BlockBody>
      <BlockFooter layerStyle="child">
        <InputMessage />
      </BlockFooter>
    </Block>
  )
}
