import React from 'react'

const Central = ({ children }) => {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
        width: '100%'
      }}
    >
      <div css={{ width: '100%' }}>{children}</div>
    </div>
  )
}

export default Central
