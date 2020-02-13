/**
 * This is a wrapper around react-wordcloud to use our themes colors.
 */

import React from 'react'
import Wordcloud from 'react-wordcloud'
import useColors from '../lib/useColors'

const ThemedWordcloud = ({ words, options }) => {
  const colors = useColors()
  return (
    <Wordcloud
      options={{
        ...options,
        colors: [colors.text],
      }}
      words={words}
    />
  )
}

export default ThemedWordcloud
