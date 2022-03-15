import { Box } from '@chakra-ui/react'

import { Living } from '@components/living'

import { RecorderProvider } from './providers/recorder'

export const Video = () => {
  return (
    <Box pos="relative">
      <RecorderProvider>
        <Living />
      </RecorderProvider>
    </Box>
  )
}
