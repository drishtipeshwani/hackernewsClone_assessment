import React from 'react'
import { Box, Spinner, Text } from '@chakra-ui/react'

export const LoadingComponent = () => {

    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 30000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <Box display={'flex'} justifyContent='center' height='100vh' alignItems={'center'}>
            {loading ?
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='#FB651E'
                    size='xl'
                /> : <Text>No Results Found</Text>}
        </Box>
    )
}
