import React from 'react'
import useColors from '../lib/useColors'

const Interlude = ({ text, style = {} }) => {
  const colors = useColors()
  return (
    <h2
      css={{
        fontSize: '3em',
        color: colors.headline,
        borderBottom: `1px solid ${colors.headline}`,
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        ...style,
      }}
    >
      {text}
    </h2>
  )
}

export default Interlude
