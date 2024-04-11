import { Flex, Text } from '@chakra-ui/react'
import VoteCard from './components/vote-card'

interface VoteFormProps {
  handleSubmit: (e: any) => void
}

export default function VoteForm({ handleSubmit }: VoteFormProps) {
  return (
    <>
      <Text alignSelf="flex-start" fontSize="3xl" fontWeight={500}>
        {' '}
        Your Vote{' '}
      </Text>
      <Flex
        w="100%"
        alignItems="flex-start"
        justifyContent="flex-start"
        gap="1rem"
        wrap="wrap"
      >
        <VoteCard handleSubmit={handleSubmit} value={1} />
        <VoteCard handleSubmit={handleSubmit} value={3} />
        <VoteCard handleSubmit={handleSubmit} value={5} />
        {/* <VoteCard />
        <VoteCard />
        <VoteCard />
        <VoteCard /> */}
      </Flex>
    </>
  )
}

// In the socket.vote i think i need to send the user information because i need to
// associate the vote with the user so i can show the correct vote for each user in the respective Card.

// This can be a new property on the currentUser object zustand store, and when the team reset the stimation
// to start a new one, this value should be updated to blank (or no). The important thing is that it need to be
// updated with the value for the new estimation.

// Will be something like this

//
// -> user vote
// -> Server get the information (vote value and userID) this is in the socket.emit.
// -> Server will emit to the FE that a user voted
// -> FE will be listening on the user voted and will get the userId and the vote.
// -> Inside the callback there must be a state update to save that vote for that user and update the page.

// In theory i will need a more complex data structure for the array of users cause i will need to save the vote also somewhere in the state
