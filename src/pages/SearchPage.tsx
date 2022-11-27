import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Select, Text, HStack, Heading, Input, Image, Button } from '@chakra-ui/react'
import PaginationComponent from '../components/PaginationComponent'
import axios from 'axios'
import hnLogo from '../assets/logo-hn.jpg'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { DateRange } from 'react-date-range'
import { LoadingComponent } from '../components/LoadingComponent'


const SearchPage = () => {

  const { query }: any = useParams()
  const [filteredNews, setFilteredNews] = useState<News[]>([])
  const [searchText, setSearchText] = useState<any>(query)
  const [type, setType] = useState<string>('story')
  const [tag, setTag] = useState<string>('(story)')
  const [sortParam, setSortParam] = useState<string>('created_at')
  const [timeInstance, setTimeInstance] = useState<string>('all')
  const [time, setTime] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [isCustom, setIsCustom] = useState<boolean>(false)
  const [customDate, setCustomDate] = useState<any>([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ])
  const [customStartTime, setCustomStartTime] = useState<number>(0)
  const [customEndTime, setCustomEndTime] = useState<number>(0)

  useEffect(() => {

    const fetchNews = async () => {
      setFilteredNews([])
      let filteredNewsData: News[] = []
      if (timeInstance !== 'custom') {
        if (sortParam === 'created_at') {
          const response = await axios.get(`http://hn.algolia.com/api/v1/search_by_date?query=${searchText}&tags=${tag}&numericFilters=created_at_i>${time}&hitsPerPage=30&page=${currentPage}`)
          response.data.hits.map((result: any) => {
            let newsObject: News = {
              title: result.title,
              url: result.url,
              comment_text: result.comment_text,
              story_url: result.story_url,
              points: result.points,
              createdAt: result.created_at,
              author: result.author
            }
            filteredNewsData.push(newsObject)
          })
        } else {
          const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${searchText}&tags=${tag}&numericFilters=created_at_i>${time}&hitsPerPage=30&page=${currentPage}`)
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
            filteredNewsData.push(newsObject)
          })
        }
      } else {
        if (sortParam === 'created_at') {
          const response = await axios.get(`http://hn.algolia.com/api/v1/search_by_date?query=${searchText}&tags=${tag}&numericFilters=created_at_i>${customStartTime},created_at_i<${customEndTime}&hitsPerPage=30&page=${currentPage}`)
          response.data.hits.map((result: any) => {
            let newsObject: News = {
              title: result.title,
              url: result.url,
              comment_text: result.comment_text,
              story_url: result.story_url,
              points: result.points,
              createdAt: result.created_at,
              author: result.author
            }
            filteredNewsData.push(newsObject)
          })
        } else {
          const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${searchText}&tags=${tag}&numericFilters=created_at_i>${customStartTime},created_at_i<${customEndTime}&hitsPerPage=30&page=${currentPage}`)
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
            filteredNewsData.push(newsObject)
          })
        }
      }
      setFilteredNews(filteredNewsData)
    }

    fetchNews()

  }, [currentPage, searchText, sortParam, time, tag, customStartTime, customEndTime, timeInstance])

  const handleSearch = (value: string) => {
    setSearchText(value)
    setCurrentPage(0)
  }


  const filterResultsOnType = (value: string) => {
    setType(value)
    setCurrentPage(0)
    if (value === 'all') {
      setTag('(story,comment)')
    }
    else if (value === 'story') {
      setTag('(story)')
    }
    else if (value === 'comment') {
      setTag('(comment)')
    }

  }

  const sortResults = (value: string) => {
    setSortParam(value)
    setCurrentPage(0)
  }

  const filterByTime = (value: string) => {
    setTimeInstance(value)
    setCurrentPage(0)
    let currentDateInSeconds: number = Math.round(Date.now() / 1000)
    let searchTime: number = 0
    if (value === 'all') {
      searchTime = 0
      setTime(searchTime)
      setIsCustom(false)
    }
    else if (value === 'last_24_hours') {
      searchTime = currentDateInSeconds - 86400
      setTime(searchTime)
      setIsCustom(false)
    }
    else if (value === 'past_week') {
      searchTime = currentDateInSeconds - 604800
      setTime(searchTime)
      setIsCustom(false)
    }
    else if (value === 'past_month') {
      searchTime = currentDateInSeconds - 2.628e+6
      setTime(searchTime)
      setIsCustom(false)
    }
    else if (value === 'past_year') {
      searchTime = currentDateInSeconds - 3.154e+7
      setTime(searchTime)
      setIsCustom(false)
    }
    else if (value === 'custom') {
      setIsCustom(true)
    }
  }

  const setCustomRange = () => {
    let startTime = Math.round(customDate[0].startDate.getTime() / 1000)
    let endTime = Math.round(customDate[0].endDate.getTime() / 1000)
    setCustomStartTime(startTime)
    setCustomEndTime(endTime)
    setIsCustom(false)
  }

  return (
    <Box m={5} p={5}>
      <Box bgColor={'#FF7416'} p={2}>
        <HStack>
          <Image alt='hackernewslogo' src={hnLogo} w={10} h={10} />
          <Heading as='h6' size='xs'>Search HackerNews</Heading>
          <Input placeholder="Search Stories by title, url or author" value={searchText} onChange={(e) => handleSearch(e.target.value)} backgroundColor='white' />
        </HStack>
      </Box>
      <Box bgColor={'#f6f6ef'}>
        <HStack p={2} width='40%' marginBottom={2}>
          <Text size='xs'>Search</Text>
          <Select value={type} onChange={(e) => filterResultsOnType(e.target.value)} borderColor='gray.500' size='sm'>
            <option value="story">Stories</option>
            <option value="comment">Comments</option>
            <option value="all">All</option>
          </Select>
          <Text size='xs'>by</Text>
          <Select value={sortParam} onChange={(e) => { sortResults(e.target.value) }} borderColor='gray.500' size='sm'>
            <option value="created_at">Date</option>
            <option value="points">Popularity</option>
          </Select>
          <Text size='xs'>for</Text>
          <Select value={timeInstance} onChange={(e) => filterByTime(e.target.value)} borderColor='gray.500' size='sm'>
            <option value="all">All time</option>
            <option value="last_24_hours">Last 24H</option>
            <option value="past_week">Past Week</option>
            <option value="past_month">Past Month</option>
            <option value="past_year">Past Year</option>
            <option value="custom">Custom Range</option>
          </Select>
        </HStack>
        {isCustom &&
          <Box p={2} marginBottom={2} display='flex' justifyContent={'center'} flexDirection='column' alignItems={'center'}>
            <DateRange
              editableDateInputs={true}
              onChange={item => setCustomDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={customDate}
            />
            <Button onClick={() => { setCustomRange() }} size='md' colorScheme='blue' width='10%' marginTop={'2'} variant='outline'>Apply</Button>
          </Box>
        }
        {filteredNews.length > 0 ?
          <Box p={1} paddingBottom={5}>
            <PaginationComponent newsData={filteredNews} currentPage={currentPage} setCurrentPage={setCurrentPage} query={searchText} />
          </Box> :
          <LoadingComponent />
        }
      </Box>
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


export default SearchPage