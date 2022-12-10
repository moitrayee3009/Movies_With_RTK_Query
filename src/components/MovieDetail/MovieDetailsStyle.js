import styled from 'styled-components'

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 63vh;
  padding: 0 10rem;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 80vh;
    padding: 0;
    flex-direction: column;
    height: 100vh !important;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 80vh;
    padding: 0;
    flex-direction: column;
    height: 100vh !important;
    margin-bottom: 15rem;
  }
  @media screen and (max-width: 375px) {
    width: 100%;
    height: 80vh;
    padding: 0;
    margin-bottom: 15rem;
    flex-direction: column;
    height: 100vh !important;
  }
`

const PosterContainer = styled.div`
  display: flex;
  /* flex-basis: 5%; */
  min-width: 25%;
  padding: 0 2rem 3rem 0;
  margin: 0;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
    padding: 1rem 0;
  }

  img {
    width: 100%;
    height: auto;
    transition: all 0.3s ease 0s;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 27%) 10px 10px 33px -4px;

    @media screen and (max-width: 768px) {
      width: 80%;
    }

    @media screen and (max-width: 600px) {
      width: 80%;
    }
    @media screen and (max-width: 375px) {
      width: 80%;
    }
  }
`

const TextContainer = styled.div`
  width: 65%;
  padding: 0 2rem;

  div {
    padding: 1rem;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`

const Description = styled.div`
  text-align: justify;
  line-height: 1.3rem;
  text-wrap: ;
`

const RDate = styled.div`
  span {
    padding-right: 0.5rem;
  }
`
const MovieTitle = styled.div`
  padding: 0 1rem !important;
  font-size: 1.5rem;
  font-weight: 500;
`
const RContainer = styled.div`
  display: flex;
  padding: 0 1rem !important;
`
const Rating = styled.div`
  padding-left: 0 !important;
  svg {
    /* color: yellow; */
    padding-right: 0.5rem;
  }
  span {
    padding-left: 5px;
  }
`

const RTime = styled.div`
  span {
    padding: 0 !important;
  }
`
const Genre = styled.div`
  span {
    font-size: 14px;
    color: #151545;
    padding: 3px 3px 3px 0;
    margin-right: 0.5rem;
    border-radius: 5px;
  }
`

export {
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
}
