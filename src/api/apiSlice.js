import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/movie/' }),
  //popular?api_key=${API_KEY}&language=${language}&page=${currentPageNumber}
  endpoints: (builder) => ({
    getAllPopularMovies: builder.query({
      query: ({ API_KEY, language, currentPageNumber }) => {
        return {
          url: `popular?api_key=${API_KEY}&language=${language}&page=${currentPageNumber}`
        }
      }
    }),
    getMovieDetails: builder.query({
      query: ({ movieId, API_KEY, language }) => {
        return {
          url: `${movieId}?api_key=${API_KEY}&language=${language}`
        }
      }
    })
  })
})

export const { useGetAllPopularMoviesQuery, useGetMovieDetailsQuery } =
  moviesApi
