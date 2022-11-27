import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HStack, Input, Heading, Flex } from '@chakra-ui/react'


const SearchBar = () => {

  const navigate = useNavigate()

  const [searchText, setSearchText] = useState<string>('')

  const handleSearch = (event: any) => {
    if (event.key === 'Enter') {
      navigate(`/search/${searchText}`)
    }
  }

  return (
    <Flex justifyContent={'center'} p={2}>
      <HStack>
        <Heading as='h6' size='xs' color='gray.600'>Search:</Heading>
        <Input placeholder="Type here" value={searchText} onKeyDown={(e) => handleSearch(e)} onChange={(e) => setSearchText(e.target.value)} backgroundColor='white' borderColor={'black'} />
      </HStack>

    </Flex>
  )
}

export default SearchBar