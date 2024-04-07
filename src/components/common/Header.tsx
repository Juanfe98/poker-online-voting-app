import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { ColorModeSwitcher } from '../../ColorModeSwitcher'

const Header: React.FC = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      paddingX="2rem"
      paddingY="1rem"
      width="100%"
    >
      <Flex align="center" mr={5}>
        <Text fontSize="x-large" fontWeight="bold">
          Ready to start pointing?
        </Text>
      </Flex>

      <ColorModeSwitcher />
    </Flex>
  )
}

export default Header
