import { Button } from '@chakra-ui/react'

function ActionButton({ onClick, text = "" }: { onClick: () => void, text: string }) {
  return (
    <Button onClick={onClick} colorScheme="purple">
      {text}
    </Button>
  )
}

export default ActionButton
