import React from 'react'
import {
  ChakraProvider,
  Box,
} from "@chakra-ui/react"
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

export const App = () => (
  <ChakraProvider>
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/search/:query" element={<SearchPage/>}/>
   </Routes>
    </BrowserRouter>
  </ChakraProvider>
)
