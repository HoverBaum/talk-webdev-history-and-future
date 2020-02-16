import React from 'react'

const Central = ({ children }) => {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%'
      }}
    >
      <div>{children}</div>
    </div>
  )
}

export default Central
