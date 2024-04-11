import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import socket from '../../../socket-connection'
import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import { useZustandState } from '../../store'
import UserJoin from '../user-join'
import VoteForm from './components/vote-form'
import { TeamMember } from '../../store/types'
import UserCard from './components/user-card'

function RefinementSession() {
  let { sessionId } = useParams()
  const teamMembers = useZustandState(state => state.teamMembers)
  const currentUser = useZustandState(state => state.currentUser)
  const setTeamMembers = useZustandState(state => state.setTeamMembers)
  const updateTeamMember = useZustandState(state => state.updateTeamMember)

  useEffect(() => {
    if (currentUser.name !== '') {
      // Emit event to join session
      socket.emit('joinSession', { sessionId, user: currentUser })

      const handleSessionUpdate = (updatedTeamMembers: TeamMember[]) => {
        setTeamMembers(updatedTeamMembers)
      }

      const handleUserVote = (voteDetails: TeamMember) => {
        updateTeamMember({ ...voteDetails, hasVoted: true })
      }

      // Listen for session updates
      socket.on('sessionUpdated', handleSessionUpdate)

      // Listen for users voteds
      socket.on('vote', handleUserVote)

      // Clean up listeners when component unmounts, currentUser or sessionId changes
      return () => {
        socket.off('sessionUpdated', handleSessionUpdate)
        socket.off('vote', handleUserVote) // Add this line
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser, sessionId])

  if (currentUser.name.length === 0) {
    return <UserJoin />
  }

  const handleVoteSubmit = (voteValue: number) => {
    const vote = {
      ...currentUser,
      vote: voteValue
    }
    socket.emit('vote', { sessionId, voteDetails: vote })
  }

  console.log('🚀 ~ RefinementSession ~ teamMembers:', teamMembers)

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      direction="column"
      gap="3rem"
    >
      <Text alignSelf="flex-start" fontSize="3xl" fontWeight={500}>
        {' '}
        Team Stimate{' '}
      </Text>
      <SimpleGrid columns={[2, null, 10]} spacing={10} justifyItems="center">
        {teamMembers.map(user => (
          <UserCard teamMember={user}/>
        ))}
      </SimpleGrid>

      <VoteForm handleSubmit={handleVoteSubmit} />
    </Flex>
  )
}

export default RefinementSession
