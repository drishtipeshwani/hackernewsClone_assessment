import React, { useState, useEffect } from 'react'
import { Box, Spinner } from '@chakra-ui/react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import PaginationComponent from '../components/PaginationComponent'
import axios from 'axios'
import { LoadingComponent } from '../components/LoadingComponent'

const Home = () => {

  const [newsData, setNewsData] = useState<News[]>([])
  const [currentPage, setCurrentPage] = useState<number>(0)

  useEffect(() => {
    const getCurrentPageData = async () => {
      setNewsData([])
      let currentNewsData: News[] = []
      const response = await axios.get(`https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=30&page=${currentPage}`)
      response.data.hits.map((result: any) => {
        let newsObject: News = {
          title: result.title,
          url: result.url,
          comment_text: result.comment_text,
          story_url: result.story_url,
          points: result.points,
          createdAt: result.created_at,
          author: result.author,
        }
        currentNewsData.push(newsObject)
      })
      setNewsData(currentNewsData)
    }
    getCurrentPageData()
  }, [currentPage])

  return (
    <Box m={5} p={5}>
      <Header />
      {newsData.length > 0 ?
        <Box bgColor={'#f6f6ef'} padding={1}>
          <PaginationComponent newsData={newsData} currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <Footer />
          <SearchBar />
        </Box>
        :
       <LoadingComponent/>
      }
    </Box>

  )
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

export default Home