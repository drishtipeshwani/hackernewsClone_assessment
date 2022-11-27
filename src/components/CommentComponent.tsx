import React, { useEffect } from 'react'
import { Box, Text, HStack, Link, VStack, Highlight } from '@chakra-ui/react'

const CommentComponent = (props: PropsType) => {

    const [date, setDate] = React.useState<Date>()

    useEffect(() => {
        const date = new Date(props.news.createdAt)
        setDate(date)
        if (props.news.points === null) {
            props.news.points = 0
        }
    }, [props.news])

    return (
        <VStack display='block' p={1} spacing={0} paddingBottom={0} paddingTop={0}>
            <HStack>
                <Text color='blackAlpha.600'>{props.index + 1}<span>.</span></Text>
                {props.query ?
                    <HStack>
                        <Box maxWidth={'60%'} fontSize={'xs'}>
                            <Highlight query={props.query} styles={{ bg: '#FAFA33' }} >
                                {props.news.comment_text}
                            </Highlight>
                        </Box>
                        {props.news.story_url !== null ?
                            <Link fontSize={'xs'} color='blackAlpha.600' href={props.news.story_url}>({props.news.story_url})</Link> :
                            null
                        }
                    </HStack>
                    : <HStack>
                        <Box maxWidth={'60%'} fontSize={'xs'}>
                            <Text>
                                {props.news.comment_text}
                            </Text>
                        </Box>
                        <Link fontSize={'xs'} color='blackAlpha.600' href={props.news.story_url}>
                            {props.query ? <Highlight query={props.query} styles={{ bg: '#FAFA33' }}>{props.news.story_url}</Highlight> :
                                <Text>({props.news.story_url})</Text>}
                        </Link>
                    </HStack>}
            </HStack>
            <HStack paddingLeft={8} color='blackAlpha.600' fontSize={'xs'}>
                <Box borderRightColor={'gray.50'} borderRight={'1px'} paddingRight={3} paddingLeft={1}>
                    <Text>{props.news.points}<span> </span>points</Text>
                </Box>
                <Box borderRightColor={'gray.100'} borderRight={'1px'} paddingRight={3} paddingLeft={1}>
                    <Text>
                        {date?.toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                        })}
                    </Text>
                </Box>
                <Box>
                    {props.query ?
                        <Text>author :<span> </span>
                            <Highlight query={props.query} styles={{ bg: '#FAFA33' }}>{props.news.author}</Highlight>
                        </Text> :
                        <Text>author :<span> </span>{props.news.author}</Text>}
                </Box>
            </HStack>
        </VStack>
    )
}

interface PropsType {
    index: number,
    news: News,
    query?: string
}

interface News {
    title: string,
    url: string,
    comment_text: string,
    story_url: string,
    points: number,
    createdAt: string,
    author: string,
}

export default CommentComponent