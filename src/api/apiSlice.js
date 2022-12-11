import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/movie/' }),
  //popular?api_key=${API_KEY}&language=${language}&page=${currentPageNumber}
  keepUnusedDataFor: 30,
  tagTypes: ['Movies'],
  endpoints: (builder) => ({
    getAllPopularMovies: builder.query({
      tagTypes: ['PopularMovies'],
      query: ({ API_KEY, language, currentPageNumber }) => {
        return {
          url: `popular?api_key=${API_KEY}&language=${language}&page=${currentPageNumber}`
        }
      }
    }),
    getMovieDetails: builder.query({
      tagTypes: ['MovieDetails'],
      query: ({ movieId, API_KEY, language }) => {
        return {
          url: `${movieId}?api_key=${API_KEY}&language=${language}`
        }
      }
    }),
    getSimilarMovies: builder.query({
      tagTypes: ['SimilarMovies'],
      query: ({ movieId, API_KEY, language }) => {
        return {
          url: `${movieId}/similar?api_key=${API_KEY}&language=${language}&page=1`
        }
      }
    })
  })
})

export const {
  useGetAllPopularMoviesQuery,
  useGetMovieDetailsQuery,
  useGetSimilarMoviesQuery
} = moviesApi
