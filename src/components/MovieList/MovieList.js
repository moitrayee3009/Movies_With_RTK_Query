import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import Movie from '../Movie/Movie'
import MovieListPaging from '../MovieListPaging/MovieListPaging'
import { useGetAllPopularMoviesQuery } from '../../api/apiSlice'
import { Spinner } from '../Spinner'

import { Container, MovieListContainer, Heading } from './MovieListStyle'
import Translate from '../Translation/Translate'

const MovieList = (props) => {
  const API_KEY = process.env.REACT_APP_API_KEY
  const baseUrl = 'https://api.themoviedb.org/3/movie/'

  const [pageList, setPageList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  const [currentPageNumber, setCurrentPageNumber] = useState(1)
  const [language, setLanguage] = useState('en-US')
  // const [popularMovieList, setPopularMovieList] = useState([])
  // const [loading, setLoading] = useState(true)
  // const [error, setError] = useState({
  //   message: '',
  //   success: false
  // })

  // const getAllPopularMovies = () => {
  //   setLoading(true)
  //   setError({
  //     message: '',
  //     success: false
  //   })

  //   axios
  //     .get(
  //       `${baseUrl}popular?api_key=${API_KEY}&language=${language}&page=${currentPageNumber}`
  //     )
  //     .then((res) => {
  //       setPopularMovieList(res.data.results)
  //       setError({
  //         message: 'Movie list has been loaded successfully',
  //         success: true
  //       })
  //     })
  //     .catch((err) => {
  //       setError({
  //         message: err.err,
  //         success: false
  //       })
  //     })
  //   setLoading(false)
  // }
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
      <Heading>
        Pupular
        <span>
          <FontAwesomeIcon icon={faAngleDoubleRight} />
        </span>
      </Heading>
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
