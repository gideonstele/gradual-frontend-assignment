import {
  VStack,
  HStack,
  Avatar,
  Tag,
  Text,
  TagProps,
  Box,
} from '@chakra-ui/react'

export interface ChatItemProps {
  avatar?: string
  name?: string
  title?: string
  character?: string
  characterProps?: TagProps
  message?: string
}

export const ChatItem = ({
  avatar,
  name,
  title,
  character,
  characterProps,
  message,
}: ChatItemProps) => {
  return (
    <HStack width="full" alignItems="center" spacing="5" height="24">
      <Avatar w="12" name={name} src={avatar} />
      <VStack alignItems="flex-start" flex="1" width="90%">
        <Box
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
          sx={{
            '& > * ~ *': {
              ml: '2',
            },
          }}
        >
          <Text as="span" fontSize="md" color="white">
            {name}
          </Text>
          {character && (
            <Tag {...characterProps} borderRadius="sm">
              {character}
            </Tag>
          )}
          <Text as="span" fontSize="sm" color="secondary">
            {title}
          </Text>
        </Box>
        <Text fontSize="md" color="primary">
          {message}
        </Text>
      </VStack>
    </HStack>
  )
}
