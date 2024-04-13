import { Button } from '@chakra-ui/react'

function RevealVotesButton({ onClick }: { onClick: () => void }) {
  return (
    <Button onClick={onClick} colorScheme="purple">
      Reveal Cards
    </Button>
  )
}

export default RevealVotesButton
