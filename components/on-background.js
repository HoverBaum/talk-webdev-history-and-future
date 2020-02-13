/** @jsx jsx */
import { css, jsx } from '@emotion/core'

export const OnBackground = ({ children }) => (
  <div
    css={css`
      background: inherit;
      position: absolute;
      top: 50%;
      left: 50%;
      color: white;
      transform: translate(-50%, -50%);
    `}
  >
    {children}
  </div>
)
