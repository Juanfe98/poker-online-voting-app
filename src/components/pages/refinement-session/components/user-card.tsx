import { Box, Flex, Text } from '@chakra-ui/react'
import { TeamMember } from '../../../store/types'
import VotedCardBackground from '../../../../assets/background-pattern-spaced.png';

interface UserCardProps {
  teamMember: TeamMember
}

const UserCard = ({ teamMember }: UserCardProps) => {
  return (
    <Flex direction="column" alignItems="center" gap="1rem">
      <Box
        w="4rem"
        h="6rem"
        borderRadius="sm"
        boxShadow="md"
        backgroundImage={
          teamMember.hasVoted ? `url(${VotedCardBackground})` : ''
        }
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        bgColor="gray.300"
        filter={teamMember.hasVoted ? 'none' : 'blur(3px)'}
        transition="0.4s"
      >
        {/* <Flex alignItems="center" justifyContent="center" h="100%">
          <Text textColor="gray.800" fontSize="xx-large">
            {teamMember.vote}
          </Text>
        </Flex> */}
      </Box>
      <Text fontSize="md" fontWeight="bold">
        {teamMember.name}
      </Text>
    </Flex>
  )
}

export default UserCard
