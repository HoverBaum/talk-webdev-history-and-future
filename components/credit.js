/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import useColors from '../lib/useColors'

export const BackgroundImage = ({ credit, creditLink, onImage }) => {
  const colors = useColors()
  const color = onImage ? 'lightgrey' : colors.text
  return (
    <div
      css={css`
        position: absolute;
        bottom: 1rem;
        ${onImage ? 'left: 1rem;' : ''}
        font-size: 1rem;
        z-index: 1001;
      `}
    >
      <p
        css={css`
          opacity: 0.66;
          font-size: small;
          margin: 0;
          color: ${color};
        `}
      >
        {creditLink ? (
          <a href={creditLink} target='_blank' style={{ color }}>
            {credit}
          </a>
        ) : (
          credit
        )}
      </p>
    </div>
  )
}

export default BackgroundImage
