import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin: auto 0px;
`

const MovieListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0px 50px;
  justify-content: center;
  margin: 0px;

  @media only screen and (max-width: 1024px) {
    padding: 0px;
  }

  @media screen and (max-width: 768px) {
    padding: 0px;
  }
  @media screen and (max-width: 600px) {
    padding: 0px;
  }
  @media screen and (max-width: 375px) {
    padding: 0px;
  }
`

export { Container, MovieListContainer }
