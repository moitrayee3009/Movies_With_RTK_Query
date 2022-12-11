import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { Heading } from './HeadingTextStyle'

const HeadingText = ({ text }) => {
  return (
    <Heading>
      {text}
      <span>
        <FontAwesomeIcon icon={faAngleDoubleRight} />
      </span>
    </Heading>
  )
}

export default HeadingText
