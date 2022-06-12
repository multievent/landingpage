import { createTheme, StyledEngineProvider, ThemeProvider as MuiThemeProvider } from '@mui/material'

export * from './useTheme'

interface TextColor {
  text1: string
  text2: string
  text3: string
  text4: string
  text5: string
  text6: string
  text7: string
}
interface BgColor {
  bg1: string
  bg2: string
  bg3: string
  bg4: string
  bg5: string
  bg6: string
  bg7: string
}

declare module '@mui/material/styles' {
  interface Theme {
    textColor: TextColor
    bgColor: BgColor
  }
}

export const theme = {
  textColor: {
    text1: '#181E1B',
    text2: '#F8EC4E',
    text3: '#6001D3',
    text4: '#FFFFFF',
    text5: '#FFB800',
    text6: '#F3F4F8',
    text7: '#EDEDED',
  },
  bgColor: {
    bg1: '#FAEE00',
    bg2: '#F3F4F6',
    bg3: '#081420',
    bg4: '#ffffff',
    bg5: '#6001D3',
    bg6: '#FFB800',
    bg7: '#E5E5E5',
  },
}

export const override: any = {
  MuiTypography: {
    styleOverrides: {
      root: {
        fontFamily: 'Helvetica Neue',
        lineHeight: 1.25,
      },
      h2: {
        fontWeight: 700,
      },
      h3: {
        fontWeight: 600,
      },
      h4: {
        fontWeight: 500,
      },
      body1: {
        fontSize: 16,
        fontWeight: 400,
        color: theme.textColor.text1,
      },
    },
  },
}

export default createTheme({
  ...theme,
  components: {
    ...override,
  },
})

export function ThemeProvider({ children, theme }: any) {
  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </StyledEngineProvider>
  )
}
