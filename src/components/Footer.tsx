import React from 'react'
import { Box, HStack, Text, Flex } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Flex borderTopColor={'#FB651E'} borderTop={'1px'} padding={2} margin={2} justifyContent={'center'}>
            <HStack marginTop={1}>
                <Box borderRightColor={'gray.50'} borderRight={'1px'} padding={2} paddingRight={3}>
                    <Text fontSize={'xs'}>Guidelines</Text>
                </Box>
                <Box borderRightColor={'gray.100'} borderRight={'1px'} padding={2} paddingRight={3}>
                    <Text fontSize={'xs'}>FAQ</Text>
                </Box>
                <Box borderRightColor={'gray.100'} borderRight={'1px'} padding={2} paddingRight={3}>
                    <Text fontSize={'xs'}>List</Text>
                </Box>
                <Box borderRightColor={'gray.100'} borderRight={'1px'} padding={2} paddingRight={3}>
                    <Text fontSize={'xs'}>API</Text>
                </Box>
                <Box borderRightColor={'gray.100'} borderRight={'1px'} padding={2} paddingRight={3}>
                    <Text fontSize={'xs'}>Security</Text>
                </Box>
                <Box borderRightColor={'gray.100'} borderRight={'1px'} padding={2} paddingRight={3}>
                    <Text fontSize={'xs'}>Legal</Text>
                </Box>
                <Box borderRightColor={'gray.100'} borderRight={'1px'} padding={2} paddingRight={3}>
                    <Text fontSize={'xs'}>Apply to YC</Text>
                </Box>
                <Box padding={2}>
                    <Text fontSize={'xs'}>Contact</Text>
                </Box>
            </HStack>
        </Flex>
    )
}

export default Footer