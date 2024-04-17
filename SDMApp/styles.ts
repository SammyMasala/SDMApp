import { UnistylesRegistry } from 'react-native-unistyles'
import theme, { breakpoints, defaultTheme } from './theme';

type AppBreakpoints = typeof breakpoints
type AppThemes = {
  defaultTheme: typeof theme
}

declare module 'react-native-unistyles' {
  export interface UnistylesBreakpoints extends AppBreakpoints { }
  export interface UnistylesThemes extends AppThemes { }
}

UnistylesRegistry
  .addThemes({
    defaultTheme: defaultTheme,
  })
  .addBreakpoints(breakpoints)
  .addConfig({
    adaptiveThemes: true
  })