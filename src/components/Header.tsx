import React from 'react'
import { Box, HStack, Image, Heading } from '@chakra-ui/react'
import Logo from '../assets/logo.png'

const Header = () => {

  return (
    <Box bgColor={'#FB651E'} p={2}>
      <HStack>
        <Box w='25px' h='25px'>
          <Image src={Logo} alt="logo" />
        </Box>
        <Box>
          <Heading as='h6' size='xs'>HackerNews-Clone</Heading>
        </Box>
      </HStack>
    </Box>
  )
}

export default Header