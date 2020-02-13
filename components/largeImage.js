/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const LargeImage = ({ src }) => (
  <img
    css={css`
      margin: 0 auto;
      display: block;
      max-width: 90%;
      max-height: 90%;
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    `}
    src={src}
  />
)

export default LargeImage
