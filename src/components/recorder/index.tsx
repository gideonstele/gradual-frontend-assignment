import {
  ILocalVideoTrack,
  IRemoteVideoTrack,
  ILocalAudioTrack,
  IRemoteAudioTrack,
} from 'agora-rtc-sdk-ng'
import { useRef, useEffect, forwardRef, useImperativeHandle } from 'react'
import { chakra, AspectRatio } from '@chakra-ui/react'

const Container = chakra('div', {
  position: 'relative',
  baseStyle: {
    minWidth: '320px',
    minHeight: '240px',
  },
})

export interface RecorderProps {
  videoTrack?: ILocalVideoTrack | IRemoteVideoTrack
  audioTrack?: ILocalAudioTrack | IRemoteAudioTrack
}

export const Recorder = forwardRef<HTMLDivElement, RecorderProps>(
  ({ videoTrack, audioTrack }, ref) => {
    const innerRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(ref, () => innerRef.current as HTMLDivElement)

    useEffect(() => {
      if (!innerRef.current) return
      videoTrack?.play(innerRef.current)
      return () => {
        videoTrack?.stop()
      }
    }, [innerRef, videoTrack])

    useEffect(() => {
      if (audioTrack) {
        audioTrack?.play()
      }
      return () => {
        audioTrack?.stop()
      }
    }, [audioTrack])

    return (
      <AspectRatio ratio={16 / 9}>
        <Container ref={innerRef} />
      </AspectRatio>
    )
  }
)
