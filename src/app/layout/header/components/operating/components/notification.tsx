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
  Box,
  Portal,
} from '@chakra-ui/react'
import { CheckIcon, BellIcon } from '@chakra-ui/icons'

export const Notification = () => {
  return (
    <Popover placement="top-start" arrowSize={12} gutter={12}>
      <PopoverTrigger>
        <Box
          tabIndex={0}
          role="button"
          aria-label="Notification"
          cursor="pointer"
          d="flex"
          alignContent="center"
        >
          <BellIcon boxSize="6" />
        </Box>
      </PopoverTrigger>
      <Portal>
        <PopoverContent
          zIndex={4}
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
