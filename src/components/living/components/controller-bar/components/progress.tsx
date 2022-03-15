import { Progress as ChakraProgress } from '@chakra-ui/react'

export interface ProgressProps {
  value?: number
}

export const Progress = ({ value }: ProgressProps) => {
  return (
    <ChakraProgress
      pos="absolute"
      bottom="0"
      left="0"
      colorScheme="orange"
      size="xs"
      width="100%"
      value={value}
    />
  )
}
