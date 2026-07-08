import 'styled-components'
import { lightTheme } from '../styles/themes'

type AppTheme = typeof lightTheme

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}
