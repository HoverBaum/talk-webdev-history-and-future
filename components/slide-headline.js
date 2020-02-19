import React from 'react'
import { css } from '@emotion/core'
import useColors from '../lib/useColors'

const SlideHeadline = ({ children, sectionTitle }) => {
  const colors = useColors()

  return (
    <h2
      css={css`
        border-bottom: 1px solid ${colors.headline};
        width: 80vw;
        font-weight: 300;
        color: ${colors.headline};
        margin-top: 0;
        margin-bottom: 0.66em;
      `}
    >
      {sectionTitle && (
        <>
          <span
            css={{
              color: colors.primary
            }}
          >
            {sectionTitle}
          </span>
          {children && <span> - </span>}
        </>
      )}
      {children}
    </h2>
  )
}

export default SlideHeadline
