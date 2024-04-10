import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChakraProvider, Container } from '@chakra-ui/react'
import Header from './components/common/Header'
import SessionParametrization from './components/pages/session-parametrization'
import RefinementSession from './components/pages/refinement-session'

export const App = () => (
  <ChakraProvider>
    <Header />
    <Container maxW="container.lg">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SessionParametrization />} />
          <Route
            path="/poker/game/:sessionId"
            element={<RefinementSession />}
          />{' '}
        </Routes>
      </BrowserRouter>
    </Container>
  </ChakraProvider>
)
