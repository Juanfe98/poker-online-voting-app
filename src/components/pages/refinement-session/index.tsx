import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import socket from '../../../socket-connection'
import { Flex, Text } from '@chakra-ui/react'
import { useZustandState } from '../../store'
import UserJoin from '../user-join'
import VoteForm from './components/vote-form'
import { TeamMember } from '../../store/types'
import UserCard from './components/user-card'
import RevealVotesButton from './components/RevealVotesButton'

function RefinementSession() {
  let { sessionId } = useParams()
  const teamMembers = useZustandState(state => state.teamMembers)
  const showVotes = useZustandState(state => state.showVotes)
  const currentUser = useZustandState(state => state.currentUser)
  const setTeamMembers = useZustandState(state => state.setTeamMembers)
  const setShowVotes = useZustandState(state => state.setShowVotes)
  const updateTeamMember = useZustandState(state => state.updateTeamMember)

  useEffect(() => {
    if (currentUser.name !== '') {
      // Emit event to join session
      socket.emit('joinSession', { sessionId, user: currentUser })

      const handleSessionUpdate = (updatedTeamMembers: TeamMember[]) => {
        setTeamMembers(updatedTeamMembers)
      }

      // setTeamMembers([{ id: 'asda', name: 'juan' }])
      const handleUserVote = (voteDetails: TeamMember) => {
        updateTeamMember({ ...voteDetails, hasVoted: true })
      }

      const handleShowVotesEvent = (showVotes: boolean) => {
        setShowVotes(showVotes)
      }

      // Listen for session updates
      socket.on('sessionUpdated', handleSessionUpdate)

      // Listen for users votes
      socket.on('vote', handleUserVote)

      // Listen for show all votes event
      socket.on('showVotes', handleShowVotesEvent)

      // Clean up listeners when component unmounts, currentUser or sessionId changes
      return () => {
        socket.off('sessionUpdated', handleSessionUpdate)
        socket.off('vote', handleUserVote)
        socket.off('showVotes', handleUserVote)
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

  const handleShowVotes = () => {
    socket.emit('showVotes', { sessionId, showVotes: true })
  }

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

      <Flex gap="2rem">
        {teamMembers.map(user => (
          <UserCard teamMember={user} showVotes={showVotes} />
        ))}
      </Flex>

      <RevealVotesButton onClick={handleShowVotes} />

      <VoteForm handleSubmit={handleVoteSubmit} />
    </Flex>
  )
}

export default RefinementSession
