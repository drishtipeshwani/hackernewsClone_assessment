import { Box, Stack, Text, Flex } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Flex borderTopColor={'#FB651E'} borderTop={'1px'} padding={2} margin={2} justifyContent={'center'} >
            <Stack marginTop={1} direction={['column', 'row']}>
                <Box padding={1}>
                    <Text fontSize={'xs'} fontWeight='500'>Guidelines</Text>
                </Box>
                <Box padding={1}>
                    <Text fontSize={'xs'} fontWeight='500'>FAQ</Text>
                </Box>
                <Box padding={1}>
                    <Text fontSize={'xs'} fontWeight='500'>List</Text>
                </Box>
                <Box padding={1}>
                    <Text fontSize={'xs'} fontWeight='500'>API</Text>
                </Box>
                <Box padding={1}>
                    <Text fontSize={'xs'} fontWeight='500'>Security</Text>
                </Box>
                <Box padding={1}>
                    <Text fontSize={'xs'} fontWeight='500'>Legal</Text>
                </Box>
                <Box padding={1} paddingRight={3}>
                    <Text fontSize={'xs'} fontWeight='500'>Apply to YC</Text>
                </Box>
                <Box padding={1}>
                    <Text fontSize={'xs'} fontWeight='500'>Contact</Text>
                </Box>
            </Stack>
        </Flex>
    )
}

export default Footer