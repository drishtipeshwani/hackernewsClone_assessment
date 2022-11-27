import React, { useState, useEffect } from 'react'
import { Box, VStack, HStack, Button, Flex } from '@chakra-ui/react'
import StoriesComponent from './StoriesComponent'
import CommentComponent from './CommentComponent'
import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons'

const PaginationComponent = (props: PropsType) => {


  const goToNextPage = () => {
    props.setCurrentPage(props.currentPage + 1)
  }

  const gotToPreviousPage = () => {
    props.setCurrentPage(props.currentPage - 1)
  }


  return (
    <VStack display='block' spacing={1} paddingBottom={1}>
      {props.newsData.map((news, index) => {
        index = 30 * props.currentPage + index;
        if (news.comment_text != null) {
          return <CommentComponent key={index} index={index} news={news} query={props.query} />
        } else {
          return <StoriesComponent key={index} index={index} news={news} query={props.query} />
        }
      })}

      <HStack>
        {props.currentPage > 0 && <Button onClick={gotToPreviousPage} size='sm' variant='ghost' color='#FB651E' colorScheme={'white'}>Prev<ArrowLeftIcon w={3} h={3} marginLeft={1} marginTop={'3px'} /></Button>}
        {props.newsData.length === 30 && <Button onClick={goToNextPage} size='sm' variant='ghost' color='#FB651E' colorScheme={'white'}>Next<ArrowRightIcon w={3} h={3} marginLeft={1} marginTop={'3px'} /></Button>}
      </HStack>
    </VStack>
  )
}

interface PropsType {
  newsData: News[],
  currentPage: number,
  setCurrentPage: (currentPage: number) => void,
  query?: string
}

interface News {
  title: string,
  url: string,
  comment_text: string,
  story_url: string,
  points: number,
  createdAt: string,
  author: string
}

export default PaginationComponent