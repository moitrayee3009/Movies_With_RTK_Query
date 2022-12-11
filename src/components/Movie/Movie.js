import React from 'react'
import { useNavigate } from 'react-router-dom'

import { CardContainer, ContentContainer, Title } from './MovieStyle'

const Movie = (props) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/${props.item.id}`)
  }

  return (
    <CardContainer onClick={handleClick}>
      <ContentContainer>
        <img
          src={`https://www.themoviedb.org/t/p/w200${props.item?.poster_path}`}
          alt='poster'
        />
      </ContentContainer>

      <Title>{props.item.title}</Title>
    </CardContainer>
  )
}

export default Movie
