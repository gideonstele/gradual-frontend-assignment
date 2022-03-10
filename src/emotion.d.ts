import '@emotion/react'
import { Keyframes } from '@emotion/react'

import './declaration/theme'
import { UikitsTheme } from './uikits/theme/type'

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends StoryTheme, UikitsTheme {
    animation?: Record<string, Keyframes>
  }
}
