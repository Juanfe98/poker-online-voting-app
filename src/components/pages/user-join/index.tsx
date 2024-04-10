import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react'
import { v4 as uuidv4 } from 'uuid'
import { useZustandState } from '../../store'

function UserJoin() {
  const setCurrentUser = useZustandState(state => state.setCurrentUser)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const nameInput = form.elements.namedItem('user-name') as HTMLInputElement
    const currentUser = {
      id: uuidv4(),
      name: nameInput.value
    }
    setCurrentUser(currentUser)
  }

  return (
    <Flex height="90vh" alignItems="center" justifyContent="center">
      <Box maxW="md" w="sm" h="xxs" p={6} boxShadow="2xl" borderRadius="lg">
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Name: </FormLabel>
            <Input type="text" name="user-name" />
          </FormControl>
          <Button mt={5} type="submit">
            Continue
          </Button>
        </form>
      </Box>
    </Flex>
  )
}

export default UserJoin
