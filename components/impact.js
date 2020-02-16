import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import useColors from '../lib/useColors'

const Impact = ({ children, size = 3, onImage }) => {
  const colors = useColors()
  return (
    <div
      css={css`
        position: absolute;
        width: 100%;
        font-size: ${size}em;
        font-weight: normal;
        text-align: center;
        color: ${onImage ? 'white' : colors.headline};
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
      `}
    >
      {children}
    </div>
  )
}

export default Impact
