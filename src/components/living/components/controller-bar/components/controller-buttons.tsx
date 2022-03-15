import { ButtonGroup, Icon, IconButton } from '@chakra-ui/react'
import { RiSettingsFill, RiUploadCloudFill } from 'react-icons/ri'
import { FaMicrophone, FaMicrophoneSlash } from 'react-icons/fa'
import { BsCameraVideoFill, BsCameraVideoOffFill } from 'react-icons/bs'
import { ImPhoneHangUp, ImPhone } from 'react-icons/im'
import { useCallback, useMemo } from 'react'

import { useRecorder } from 'app/modules/hub/components/video/providers/recorder'
import { useStore } from 'stores'

export const ControllerButtons = () => {
  // get from provider
  const { join, leave, joinState, localVideoTrack, localAudioTrack } =
    useRecorder()
  const {
    value: { appid, channel, token },
  } = useStore(state => state.agora)
  // some states ....
  // useMemo ?
  const isRecord = joinState && localVideoTrack
  const isMicrophone = joinState && localAudioTrack
  const IconRecord = isRecord ? BsCameraVideoOffFill : BsCameraVideoFill

  const IconMicrophone = isMicrophone ? FaMicrophoneSlash : FaMicrophone

  const handleSettings = useCallback(() => {
    // TODO: open settings
  }, [])

  const handleUpload = useCallback(() => {
    // TODO: open settings
  }, [])

  const handleChangeRecord = useCallback(() => {
    // TODO
  }, [])

  const handleChangeMicrophone = useCallback(() => {
    // TODO
  }, [])

  const handleJoin = useCallback(() => {
    if (!joinState) {
      join(appid, channel, token)
    }
  }, [appid, channel, join, joinState, token])

  const handleLeave = useCallback(() => {
    if (joinState) {
      leave()
    }
  }, [joinState, leave])

  const CallIcon = useMemo(
    () =>
      joinState ? (
        <IconButton
          aria-label="hang up"
          variant="solid"
          bgColor="red.500"
          color="white"
          rounded="full"
          icon={<Icon as={ImPhoneHangUp} />}
          onClick={handleLeave}
        />
      ) : (
        <IconButton
          aria-label="hang up"
          variant="solid"
          bgColor="green.400"
          color="white"
          rounded="full"
          icon={<Icon as={ImPhone} />}
          onClick={handleJoin}
        />
      ),
    [handleJoin, handleLeave, joinState]
  )

  return (
    <ButtonGroup
      variant="unstyled"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      color="white"
      size="sm"
      lineHeight="1"
      spacing="3"
    >
      <IconButton
        aria-label="settings"
        icon={<Icon as={RiSettingsFill} />}
        onClick={handleSettings}
      />
      <IconButton
        aria-label="toggle record"
        icon={<Icon as={IconRecord} />}
        onClick={handleChangeMicrophone}
      />
      <IconButton
        aria-label="toggle microphone"
        icon={<Icon as={IconMicrophone} />}
        onClick={handleChangeRecord}
      />
      <IconButton
        aria-label="uploading"
        icon={<Icon as={RiUploadCloudFill} />}
        onClick={handleUpload}
      />
      {CallIcon}
    </ButtonGroup>
  )
}
