import React from 'react'

const Split = ({ children }) => {
  const [a, ...rest] = React.Children.toArray(children)
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'start',
        height: '100%',
        width: '100%'
      }}
    >
      <div css={{ width: '50%' }}>{a}</div>
      <div css={{ width: '50%' }}>{rest}</div>
    </div>
  )
}

export default Split
