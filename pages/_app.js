import '@styles/globals.css'

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}

import { ThemeProvider } from '@emotion/react'
// _app.js
import App from 'next/app'

// _app.js
import withDarkMode from 'next-dark-mode'

function MyApp(props) {
  const {
    autoModeActive,
    autoModeSupported,
    darkModeActive,
    switchToAutoMode,
    switchToDarkMode,
    switchToLightMode,
  } = props.darkMode
}
function MyApp({ Component, darkMode, pageProps }) {
  const {
    autoModeActive,
    autoModeSupported,
    darkModeActive,
    switchToAutoMode,
    switchToDarkMode,
    switchToLightMode,
  } = darkMode

  return (
    <ThemeProvider theme={{ darkMode: darkModeActive}}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
  export default withDarkMode(MyApp)