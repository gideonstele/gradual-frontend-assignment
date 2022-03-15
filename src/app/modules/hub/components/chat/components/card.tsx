import { AddIcon } from '@chakra-ui/icons'
import {
  VStack,
  HStack,
  Avatar,
  Tag,
  Text,
  Icon,
  Center,
  Button,
} from '@chakra-ui/react'
import { RiLinkedinFill } from 'react-icons/ri'

export const Card = () => {
  return (
    <VStack padding="5" spacing="3" borderRadius="md" layerStyle="child">
      <HStack width="full" alignItems="center" spacing="5" height="24">
        <Avatar
          size="12"
          name="Eduardo Mckinney"
          src="https://i.pravatar.cc/90?u=MZ4GS4K_oeMyHDlK7JznS"
        />
        <VStack alignItems="flex-start" flex="1" width="90%">
          <Tag colorScheme="blue" borderRadius="sm">
            Attendee
          </Tag>
          <HStack spacing="3" alignItems="center" color="white">
            <Text fontSize="lg" sx={{ fontWeight: 'bold' }}>
              Eduardo Mckinney
            </Text>
            <Center
              w="7"
              h="7"
              rounded="full"
              border="1px solid"
              borderColor="white"
            >
              <Icon as={RiLinkedinFill} />
            </Center>
          </HStack>
          <Text fontSize="sm" color="primary">
            Head of Core Product Engineering @ Pinterest
          </Text>
        </VStack>
      </HStack>
      <VStack spacing="3">
        <Text fontSize="sm" color="secondary">
          Eric S. Yuan founded Zoom in 2011. Prior to starting Zoom, Eric was
          Corporate Vice President of Engineering at Cisco, where he was
          responsible for Cisco&apos;s collaboration software development. As...
        </Text>
        <Button
          size="sm"
          variant="unstyled"
          color="green"
          alignItems="center"
          leftIcon={<AddIcon boxSize="2" />}
        >
          Show more
        </Button>
      </VStack>
    </VStack>
  )
}
