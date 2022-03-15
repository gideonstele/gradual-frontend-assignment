import { Box } from '@chakra-ui/react'

import { Recorder } from '@components/recorder'
import { useRecorder } from 'app/modules/hub/components/video/providers/recorder'

import { ControllerBar } from './components/controller-bar'

export const Living = () => {
  const { localVideoTrack, localAudioTrack, remoteUsers } = useRecorder()
  return (
    <Box pos="relative">
      <Recorder videoTrack={localVideoTrack} audioTrack={localAudioTrack} />
      <ControllerBar timer="1: 53" />
      {remoteUsers && remoteUsers[0] && (
        <Box pos="absolute" right="1" top="1" width="50%">
          <Recorder
            videoTrack={remoteUsers[0].videoTrack}
            audioTrack={remoteUsers[0].audioTrack}
          />
        </Box>
      )}
    </Box>
  )
}
