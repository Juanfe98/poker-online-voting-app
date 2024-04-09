import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChakraProvider, Container } from '@chakra-ui/react'
import Header from './components/common/Header'
import SessionParametrization from './components/pages/session-parametrization'
import UserJoin from './components/pages/user-join'
const mockUsers = [
  {
    id: 1,
    name: 'Alex Johnson',
    avatarUrl: 'https://i.pravatar.cc/150?img=3',
    hasVoted: true,
    email: 'alex.johnson@example.com',
    role: 'Moderator',
    lastActive: '2023-04-05T12:34:56Z'
  },
  {
    id: 2,
    name: 'Bailey Brown',
    avatarUrl: 'https://i.pravatar.cc/150?img=4',
    hasVoted: false,
    email: 'bailey.brown@example.com',
    role: 'Voter',
    lastActive: '2023-04-04T08:30:00Z'
  },
  {
    id: 3,
    name: 'Charlie Davis',
    avatarUrl: 'https://i.pravatar.cc/150?img=5',
    hasVoted: true,
    email: 'charlie.davis@example.com',
    role: 'Voter',
    lastActive: '2023-04-03T15:45:30Z'
  }
  // Add more users as needed
]

export const App = () => (
  <ChakraProvider>
    <Container maxW="container.xl">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SessionParametrization />} />
          <Route path="/poker/game" element={<UserJoin />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </BrowserRouter>
    </Container>
  </ChakraProvider>
)
