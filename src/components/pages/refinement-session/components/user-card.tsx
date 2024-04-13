import { Box, Flex, Text } from '@chakra-ui/react'
import { TeamMember } from '../../../store/types'
import VotedCardBackground from '../../../../assets/background-pattern-spaced.png'

interface UserCardProps {
  teamMember: TeamMember
  showVotes: boolean
}

const UserCard = ({ teamMember, showVotes }: UserCardProps) => {
  return (
    <Flex direction="column" alignItems="center" gap="1rem">
      <Box
        w="6rem"
        h="8rem"
        borderRadius="sm"
        boxShadow="md"
        backgroundImage={
          teamMember.hasVoted && !showVotes ? `url(${VotedCardBackground})` : ''
        }
        bgColor={teamMember.hasVoted ? 'white' : 'gray.300'}
        filter={teamMember.hasVoted ? 'none' : 'blur(3px)'}
        transition="0.4s"
      >
        {showVotes && (
          <Flex alignItems="center" justifyContent="center" h="100%">
            <Text textColor="gray.800" fontSize="xx-large">
              {teamMember.vote}
            </Text>
          </Flex>
        )}
      </Box>
      <Text fontSize="md" fontWeight="bold">
        {teamMember.name}
      </Text>
    </Flex>
  )
}

export default UserCard
