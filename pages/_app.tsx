import '../styles/globals.css'
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      {/* Componentとは、仮引数　*/}
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
