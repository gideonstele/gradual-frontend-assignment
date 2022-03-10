/// <reference types="vite/client" />
/// <reference types="@emotion/react/types/css-prop" />

interface ImportMetaEnv {
  readonly VITE_API_ENV: 'dev' | 'stg'
  readonly VITE_API_BASE: string
  readonly VITE_OSS_BASE: string
  readonly DEV_API_PROXY: string
  readonly VITE_UNSPLASH_ACCESS_KEY: string
  readonly VITE_UNSPLASH_SECRET_KEY: string
  readonly VITE_GIPHY_TOKEN: string
  readonly VITE_PEXELS_TOKEN: string
  readonly VITE_HIDE_REACT_QUERY_DEVTOOL: string
  readonly VITE_VIDEO_MUX_ENV_KEY: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
