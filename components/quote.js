import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import useColors from '../lib/useColors'

const Quote = ({ children, onImage, credit }) => {
  const colors = useColors()
  const quoteStyle = css`
    color: ${colors.primary};
    font-size: 2em;
  `
  return (
    <div
      css={css`
        font-style: italic;
        font-weight: 300;
        color: ${onImage ? 'white' : colors.headline};
        position: relative;
      `}
    >
      <span
        css={css`
          position: absolute;
          top: -3rem;
          left: -1rem;
          ${quoteStyle}
        `}
      >
        “
      </span>
      {children}
      <span
        css={css`
          position: absolute;
          bottom: -2rem;
          left: -1rem;
          ${quoteStyle}
        `}
      >
        „
      </span>
      {credit && (
        <span
          css={css`
            font-size: 0.5em;
            position: absolute;
            bottom: 0;
            right: 0;
          `}
        >
          - {credit}
        </span>
      )}
    </div>
  )
}

export default Quote
