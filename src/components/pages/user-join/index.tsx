import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react'
import { useZustandState } from '../../store'

function UserJoin() {
  const addTeamMember = useZustandState(state => state.addTeamMember)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const nameInput = form.elements.namedItem('user-name') as HTMLInputElement
    addTeamMember({ name: nameInput.value })
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
