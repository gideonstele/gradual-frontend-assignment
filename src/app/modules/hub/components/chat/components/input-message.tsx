import {
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
  Popover,
  PopoverAnchor,
  PopoverArrow,
  PopoverContent,
  PopoverBody,
  Portal,
} from '@chakra-ui/react'
import { ArrowUpIcon } from '@chakra-ui/icons'
import {
  useState,
  useCallback,
  KeyboardEventHandler,
  useRef,
  useLayoutEffect,
} from 'react'

export const InputMessage = () => {
  const [value, setValue] = useState('')
  const [showPopover, setShowPopover] = useState(false)

  const timer = useRef<null | number>(null)

  const hasMessage = value.length > 0

  const onSend = useCallback(() => {
    if (hasMessage) {
      // mock send message
      setValue('')
    } else {
      setShowPopover(true)
    }
  }, [hasMessage])

  const onKeyDown = useCallback<KeyboardEventHandler<HTMLInputElement>>(
    e => {
      if (e.key === 'Enter') {
        onSend()
        e.preventDefault()
      }
    },
    [onSend]
  )

  const onInput = useCallback<KeyboardEventHandler<HTMLInputElement>>(e => {
    setValue(e.currentTarget.value)
  }, [])

  useLayoutEffect(() => {
    if (showPopover) {
      timer.current && window.clearTimeout(timer.current)
      timer.current = window.setTimeout(() => {
        setShowPopover(false)
      }, 3000)
    }
    return () => {
      timer.current && window.clearTimeout(timer.current)
    }
  }, [showPopover])

  return (
    <Popover placement="top-start" isOpen={showPopover}>
      <PopoverAnchor>
        <InputGroup flex="1" w="100%">
          <Input
            rounded="full"
            sx={{
              color: 'gray.700',
              bgColor: 'white',
              _hover: {
                color: 'gray.900',
                bgColor: 'white',
                borderColor: 'gray.300',
              },
              _focus: {
                color: 'gray.900',
                bgColor: 'white',
                borderColor: 'cyan.600',
              },
            }}
            type="text"
            placeholder="Type your message..."
            _placeholder={{ color: 'gray.400' }}
            onInput={onInput}
            onKeyDown={onKeyDown}
          />
          <InputRightElement width="10">
            {hasMessage && (
              <IconButton
                colorScheme="gray"
                aria-label="send message"
                rounded="75%"
                size="sm"
                sx={{
                  color: 'white',
                  bgColor: 'blackAlpha.500',
                  _hover: {
                    color: 'white',
                    bgColor: 'blackAlpha.700',
                  },
                  _focus: {
                    color: 'white',
                    bgColor: 'blackAlpha.800',
                  },
                }}
                icon={<ArrowUpIcon />}
                onClick={onSend}
              />
            )}
          </InputRightElement>
        </InputGroup>
      </PopoverAnchor>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverBody>Please Input Something...</PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  )
}
