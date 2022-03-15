import { useRTC } from 'providers/rtc'
import { createInjection } from 'utils/injection'

const RecorderContainer = createInjection(function () {
  const { useRTCClient } = useRTC()

  return useRTCClient()
})

export const RecorderProvider = RecorderContainer.Provider

export const RecorderConsumer = RecorderContainer.Consumer

export const useRecorder = RecorderContainer.useInjection
