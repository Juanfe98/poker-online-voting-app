import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/common/Header'
// import { ColorModeSwitcher } from "./ColorModeSwitcher"

export const App = () => (
  <ChakraProvider>
    <Header />
    {/* Other components like your main content and footer here */}
  </ChakraProvider>
)
