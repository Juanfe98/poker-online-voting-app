import React from 'react';
import { Flex, Text, Box, useColorModeValue } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

const Header: React.FC = () => {
  const bgColor = useColorModeValue('teal.500', 'teal.200');
  const textColor = useColorModeValue('white', 'gray.800');

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      paddingX="2rem"
      paddingY="1rem"
      bg={bgColor}
      color={textColor}
      width="100%"
    >
      <Flex align="center" mr={5}>
        <Text fontSize="lg" fontWeight="bold">
          Ready for Refinement?
        </Text>
      </Flex>

      <Box display="flex" alignItems="center">
       <ColorModeSwitcher />
      </Box>
    </Flex>
  );
};

export default Header;
