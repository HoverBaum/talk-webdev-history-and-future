/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const dimension = '25rem'

export const Portrait = ({ src, title }) => (
  <div
    css={css`
      width: 100%;
    `}
  >
    <img
      css={css`
        width: ${dimension};
        height: ${dimension};
        max-width: 100%;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        border-radius: 0.5rem 0.5rem 0 0;
        margin: 0 auto;
        display: block;
        margin-bottom: 2rem;
      `}
      src={src}
    />
    {title && (
      <span
        css={css`
          display: block;
          text-align: center;
          font-size: 2rem;
        `}
      >
        {title}
      </span>
    )}
  </div>
)

export default Portrait
