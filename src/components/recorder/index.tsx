import {
  ILocalVideoTrack,
  IRemoteVideoTrack,
  ILocalAudioTrack,
  IRemoteAudioTrack,
} from 'agora-rtc-sdk-ng'
import { useRef, useEffect, forwardRef, useImperativeHandle } from 'react'

export interface RecorderProps {
  videoTrack: ILocalVideoTrack | IRemoteVideoTrack | undefined
  audioTrack: ILocalAudioTrack | IRemoteAudioTrack | undefined
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
      <div
        ref={innerRef}
        className="video-player"
        style={{ width: '320px', height: '240px' }}
      ></div>
    )
  }
)
