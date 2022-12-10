import React from 'react'
import { Languages, Language } from './TranslateStyle'

const Translate = ({ setLanguage, language }) => {
  let languageList = [
    { name: 'English', value: 'en-US' },
    { name: 'Swedish', value: 'sv' },
    { name: 'Spanish', value: 'es' },
    { name: 'Korean', value: 'ko' }
  ]

  return (
    <Languages>
      {languageList.map((lan) => {
        return (
          <Language
            key={lan.value}
            className={`${lan.value === language ? 'active' : ''}`}
            onClick={() => setLanguage(lan.value)}
          >
            {lan.name}
          </Language>
        )
      })}
    </Languages>
  )
}

export default Translate
