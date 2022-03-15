import AgoraRTC from 'agora-rtc-sdk-ng'
import { useCallback } from 'react'

import { createInjection } from 'utils/injection'
import { useAgora } from 'hooks/useAgora'

const RTCContainer = createInjection(function () {
  const client = AgoraRTC.createClient({ codec: 'h264', mode: 'rtc' })

  const useRTCClient = useCallback(() => {
    return useAgora(client)
  }, [client])

  return {
    useRTCClient,
  }
})

export const RTCProvider = RTCContainer.Provider

export const useRTC = RTCContainer.useInjection
