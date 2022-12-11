import React, { useState } from 'react'

import Movie from '../Movie/Movie'
import MovieListPaging from '../MovieListPaging/MovieListPaging'
import { useGetAllPopularMoviesQuery } from '../../api/apiSlice'
import { Spinner } from '../Spinner'

import { Container, MovieListContainer } from '../../styles/MovieListStyle'
import Translate from '../Translation/Translate'
import HeadingText from '../HeadingText/HeadingText'

const MovieList = (props) => {
  const API_KEY = process.env.REACT_APP_API_KEY

  const [pageList, setPageList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  const [currentPageNumber, setCurrentPageNumber] = useState(1)
  const [language, setLanguage] = useState('en-US')

  const { isLoading, data, isError, error } = useGetAllPopularMoviesQuery({
    API_KEY,
    language,
    currentPageNumber
  })

  console.log(data)
  if (isLoading)
    return (
      <div>
        <Spinner />
      </div>
    )

  if (isError) {
    return <h3>{error.message}</h3>
  }

  return (
    <Container>
      <Translate setLanguage={setLanguage} language={language}></Translate>
      <HeadingText text='Popular Movies' />

      <MovieListContainer>
        {data.results.map((item) => (
          <Movie key={item.id} item={item} selectedLanguage={language}></Movie>
        ))}
      </MovieListContainer>
      <MovieListPaging
        setCurrentPageNumber={setCurrentPageNumber}
        currentPageNumber={currentPageNumber}
        pageList={pageList}
        setPageList={setPageList}
      />
    </Container>
  )
}

export default MovieList
