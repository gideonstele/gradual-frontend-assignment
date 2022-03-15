import { forwardRef } from 'react'
import {
  Button,
  Flex,
  IconButton,
  StackProps,
  Tag,
  TagLabel,
  TagLeftIcon,
} from '@chakra-ui/react'
import { TimeIcon } from '@chakra-ui/icons'
import { BsFullscreen } from 'react-icons/bs'

import { Progress } from './components/progress'
import { ControllerButtons } from './components/controller-buttons'

export interface ControllerBarProps extends Omit<StackProps, 'children'> {
  progress?: number
  timer?: string
}

export const ControllerBar = forwardRef<HTMLDivElement, ControllerBarProps>(
  ({ progress = 70, timer }, ref) => {
    return (
      <Flex
        ref={ref}
        justifyContent="space-between"
        alignItems="center"
        as="footer"
        position="relative"
        px="3"
        py="2"
        bgColor="black"
      >
        <Tag colorScheme="orange">
          <TagLeftIcon as={TimeIcon} />
          <TagLabel>{timer}</TagLabel>
        </Tag>
        <Button colorScheme="green" size="xs" fontSize="12px">
          Extend
        </Button>
        <ControllerButtons />
        <IconButton aria-label="full screen" icon={<BsFullscreen />} />
        <Progress value={progress} />
      </Flex>
    )
  }
)
