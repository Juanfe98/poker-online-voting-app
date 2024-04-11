import { Box, Text } from '@chakra-ui/react'

function VoteCard({handleSubmit, value}: any) {
  return (
    <Box
      w="4rem"
      h="6rem"
      borderColor="black"
      borderRadius="10px"
      border="1px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      as="button"
      onClick={() => handleSubmit(value)}
    >
      <Text fontSize="lg">{value}</Text>
    </Box>
  )
}

export default VoteCard
