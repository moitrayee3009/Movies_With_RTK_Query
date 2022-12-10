import React, { Fragment, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { Spinner } from './components/Spinner'
import { Provider } from 'react-redux'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { moviesApi } from './api/apiSlice'
import { store } from './store'

const MovieList = React.lazy(() => import('./components/MovieList/MovieList'))
const MovieDetail = React.lazy(() =>
  import('./components/MovieDetail/MovieDetail')
)

function App({ movieId }) {
  return (
    <Provider store={store}>
      <ApiProvider api={moviesApi}>
        <Fragment>
          <Suspense
            fallback={
              <div>
                <Spinner />
              </div>
            }
          >
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path='/:movieId' element={<MovieDetail />} />
                <Route path='/' element={<MovieList />} />
              </Routes>
            </BrowserRouter>
          </Suspense>
          <Footer />
        </Fragment>
      </ApiProvider>
    </Provider>
  )
}

export default App
