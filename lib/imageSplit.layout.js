/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Children } from 'react'

const ImageSplit = ({ children, src }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        height: 100%;
        width: 100%;
      `}
    >
      <div
        css={css`
          width: 50%;
          align-self: flex-start;
        `}
      >
        {children}
      </div>
      <div
        css={css`
          width: 50%;
        `}
      >
        <img src={src} />
      </div>
    </div>
  )
}

export default ImageSplit
