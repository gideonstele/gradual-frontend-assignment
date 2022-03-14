/// <reference types="vite/client" />
/// <reference types="@emotion/react/types/css-prop" />

export interface ImportMetaEnv {
  readonly VITE_API_ENV: 'dev' | 'stg'
  readonly VITE_API_BASE: string
  // 更多环境变量...
}

export interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare global {
  import { IAgoraRTCClient, ICameraVideoTrack } from 'agora-rtc-sdk-ng'
  export interface Window {
    client: IAgoraRTCClient
    videoTrack: ICameraVideoTrack
  }
}
