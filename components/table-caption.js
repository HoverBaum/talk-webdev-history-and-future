import React from 'react'

const TableCaption = ({ children }) => (
  <span
    css={{
      float: 'right',
      marginTop: '1rem',
      fontSize: '0.75em',
    }}
  >
    {children}
  </span>
)

export default TableCaption
