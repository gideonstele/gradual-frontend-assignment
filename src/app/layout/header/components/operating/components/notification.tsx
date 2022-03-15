import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Portal,
  Show,
  HStack,
} from '@chakra-ui/react'
import { CheckIcon, BellIcon } from '@chakra-ui/icons'

export const Notification = () => {
  return (
    <Popover placement="top-start" arrowSize={12} gutter={12}>
      <PopoverTrigger>
        <HStack
          tabIndex={0}
          role="button"
          aria-label="Notification"
          cursor="pointer"
        >
          <BellIcon boxSize="6" />
          <Show below="md">
            <span>Notifications</span>
          </Show>
        </HStack>
      </PopoverTrigger>
      <Portal>
        <PopoverContent
          zIndex="popover"
          color="white"
          bg="blue.800"
          borderColor="blue.800"
          borderRadius="md"
        >
          <PopoverHeader pt={4} fontWeight="bold" border="0">
            Notification
          </PopoverHeader>
          <PopoverArrow bgColor="blue.800" />
          <PopoverCloseButton />
          <PopoverBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, quisquam?
          </PopoverBody>
          <PopoverFooter
            border="0"
            d="flex"
            alignItems="center"
            justifyContent="flex-end"
            pb={4}
          >
            <Button colorScheme="green" leftIcon={<CheckIcon />}>
              Mark All As Read
            </Button>
          </PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  )
}
