/** @jsx jsx */
import { css, jsx } from '@emotion/core'

export const Center = ({ children }) => (
  <div
    css={css`
      display: flex;
      justify-content: center;
      width: 100%;
    `}
  >
    {children}
  </div>
)

export default Center
