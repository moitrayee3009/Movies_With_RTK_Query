import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/movie/' }),
  //  keepUnusedDataFor: 30,
  tagTypes: ['Movies'],
  endpoints: (builder) => ({
    getAllPopularMovies: builder.query({
      query: ({ API_KEY, language, currentPageNumber }) => {
        return {
          url: `popular?api_key=${API_KEY}&language=${language}&page=${currentPageNumber}`
        }
      },
      tagTypes: ['PopularMovies']
    }),
    getMovieDetails: builder.query({
      query: ({ movieId, API_KEY, language }) => {
        return {
          url: `${movieId}?api_key=${API_KEY}&language=${language}`
        }
      },
      tagTypes: ['MovieDetails']
    }),
    getSimilarMovies: builder.query({
      query: ({ movieId, API_KEY, language }) => {
        return {
          url: `${movieId}/similar?api_key=${API_KEY}&language=${language}&page=1`
        }
      },
      tagTypes: ['SimilarMovies']
    })
  })
})

export const {
  useGetAllPopularMoviesQuery,
  useGetMovieDetailsQuery,
  useGetSimilarMoviesQuery
} = moviesApi
