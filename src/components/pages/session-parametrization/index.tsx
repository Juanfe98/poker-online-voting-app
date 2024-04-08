import React from 'react'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  Text
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useZustandState } from '../../store'

const SessionParametrization: React.FC = () => {
  const { setPointingType, pointingType } = useZustandState()
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    navigate('/poker/game')
  }

  return (
    <Box maxW="md" mx="auto" p={6} my={20} boxShadow="lg" borderRadius="lg">
      <Text fontSize="x-large" fontWeight="bold">
        Create Room
      </Text>
      <Text mb={10} fontSize="md" color="gray.500">
        Create a new planning poker room for your estimation session
      </Text>

      <form onSubmit={handleSubmit}>
        <FormControl as="fieldset" mb={4}>
          <FormLabel as="legend">Card Set</FormLabel>
          <RadioGroup onChange={setPointingType} value={pointingType} size="md">
            <Stack spacing={5}>
              <Radio value="fibonacci">
                1, 2, 3, 5, 8, 13, 20, 40, 100 <br />{' '}
                <Text color="gray.500" fontSize="small">
                  Fibonacci with rounded values
                </Text>
              </Radio>
              <Radio value="powersOfTwo">
                1,2,4,8,16,32
                <br />{' '}
                <Text color="gray.500" fontSize="small">
                  Powers of two
                </Text>
              </Radio>
              <Radio value="tShirtSizing">
                XXS, XS, S, M, L, XL, XXL
                <br />{' '}
                <Text color="gray.500" fontSize="small">
                  T'shirt's sizing
                </Text>
              </Radio>
              <Radio value="smallValues">
                1, 2, 3, 5, 8, 13
                <br />{' '}
                <Text color="gray.500" fontSize="small">
                  Small values
                </Text>
              </Radio>
            </Stack>
          </RadioGroup>
        </FormControl>

        <Button type="submit">Create Room</Button>
      </form>
    </Box>
  )
}

export default SessionParametrization
