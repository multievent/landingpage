import '../styles/globals.css'
import { styled } from '@mui/material'
// import Header from '../src/components/Header'
import { ThemeProvider } from '../src/theme'
import theme from '../src/theme'
import Head from 'next/head'

const AppWrapper = styled('div')(({ theme }) => ({
  minHeight: '100vh',
  // minWidth: 1200,
  background: theme.bgColor.bg1,
  [theme.breakpoints.down('sm')]: {
    minWidth: 'unset',
  },
}))

interface IAppProps {
  Component: any
  pageProps: any
}

function MyApp({ Component, pageProps }: IAppProps) {
  // useEffect(() => {
  //   const minWidth = 600
  //   const maxWidth = 1240
  //   const docEl = document.documentElement,
  //     resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
  //     reCalc = function () {
  //       let clientWidth = docEl.clientWidth
  //       clientWidth = clientWidth > maxWidth ? maxWidth : clientWidth < minWidth ? minWidth : clientWidth
  //       if (!clientWidth) return
  //       docEl.style.fontSize = 100 * (clientWidth / 1240) + 'px'
  //       docEl.getElementsByTagName('body')[0].style.fontSize = docEl.style.fontSize
  //     }

  //   reCalc()
  //   if (!document.addEventListener) return
  //   window.addEventListener(resizeEvt, reCalc, false)
  //   document.addEventListener('DOMContentLoaded', reCalc, false)
  // }, [])

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Next</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      <AppWrapper>
        {/* <Header /> */}
        <Component {...pageProps} />
      </AppWrapper>
    </ThemeProvider>
  )
}

export default MyApp
