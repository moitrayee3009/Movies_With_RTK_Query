import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import {
  DetailsContainer,
  PosterContainer,
  TextContainer,
  Description,
  RContainer,
  RDate,
  MovieTitle,
  Rating,
  Genre,
  RTime
} from './MovieDetailsStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useGetMovieDetailsQuery } from '../../api/apiSlice'
import { Spinner } from '../Spinner'
import Translate from '../Translation/Translate'

const MovieDetail = () => {
  const API_KEY = process.env.REACT_APP_API_KEY
  const params = useParams()
  const movieId = params.movieId

  const [language, setLanguage] = useState('en-US')

  const { isLoading, data, isError, error } = useGetMovieDetailsQuery({
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
    <>
      <Translate setLanguage={setLanguage} language={language}></Translate>
      <DetailsContainer>
        <PosterContainer>
          <img
            src={`https://www.themoviedb.org/t/p/w300${
              data ? data.poster_path : ''
            }`}
            alt='poster '
          />
        </PosterContainer>
        <TextContainer>
          <MovieTitle>{data ? data.title : ''}</MovieTitle>
          <Genre>
            {data.genres &&
              data.genres.map((genre, i) => (
                <span key={i}> {genre.name} </span>
              ))}
          </Genre>
          <RContainer>
            <Rating>
              <FontAwesomeIcon icon={faStar} />
              {data ? data.vote_average : ''}
              <span>(&nbsp;{data ? data.vote_count : ''}&nbsp;)</span>
            </Rating>
            <RDate>
              <span>Release Date: </span>
              {data ? data.release_date : ''}
            </RDate>
          </RContainer>
          <RTime>
            <span>Duration:</span> {data ? data.runtime : ''} min
          </RTime>

          <Description>{data ? data.overview : ''}</Description>
        </TextContainer>
      </DetailsContainer>
    </>
  )
}

export default MovieDetail
