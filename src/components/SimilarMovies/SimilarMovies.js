import React from 'react'
import { useGetSimilarMoviesQuery } from '../../api/apiSlice'
import { useParams } from 'react-router-dom'
import { Spinner } from '../Spinner'
import Movie from '../Movie/Movie'
import HeadingText from '../HeadingText/HeadingText'
import { Container, MovieListContainer } from '../../styles/MovieListStyle'

const SimilarMovies = ({ language }) => {
  const API_KEY = process.env.REACT_APP_API_KEY
  const params = useParams()
  const movieId = params.movieId

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

  return (
    <Container>
      <HeadingText text='Similar Movies' />
      <MovieListContainer>
        {data.results.slice(0, 8).map((item) => (
          <Movie key={item.id} item={item} selectedLanguage={language}></Movie>
        ))}
      </MovieListContainer>
    </Container>
  )
}

export default SimilarMovies
