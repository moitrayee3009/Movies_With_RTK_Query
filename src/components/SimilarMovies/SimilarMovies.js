import React, { useState } from 'react'
import { useGetSimilarMoviesQuery } from '../../api/apiSlice'
import { useParams } from 'react-router-dom'
import { Spinner } from '../Spinner'
import Translate from '../Translation/Translate'
import Movie from '../Movie/Movie'
import HeadingText from '../HeadingText/HeadingText'
// import { Container } from './SimilarMoviesStyle'
import { Container, MovieListContainer } from '../../styles/MovieListStyle'

const SimilarMovies = ({ language }) => {
  const API_KEY = process.env.REACT_APP_API_KEY
  const params = useParams()
  const movieId = params.movieId

  //   const [language, setLanguage] = useState(selectedLanguage)

  const { isLoading, data, isError, error } = useGetSimilarMoviesQuery({
    movieId,
    API_KEY,
    language
  })

  if (isLoading)
    return (
      <div>
        <Spinner />
      </div>
    )

  if (isError) {
    return <h3>{error.message}</h3>
  }
  console.log(data)
  return (
    <Container>
      <HeadingText text='Similar Movies' />
      {/* <Translate setLanguage={setLanguage} language={language} /> */}
      <MovieListContainer>
        {data.results.slice(0, 8).map((item) => (
          <Movie key={item.id} item={item} selectedLanguage={language}></Movie>
        ))}
      </MovieListContainer>
    </Container>
  )
}

export default SimilarMovies
