/**
 * A legends to explain symbols used later on.
 */

/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const styleForThree = css`
  width: 100%;
  grid-template-columns: 30% 30% 30%;
  grid-template-rows: 100%;
`

const styleForFour = css`
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  width: 60rem;
`

export const BackgroundImage = ({ items }) => (
  <div
    css={css`
      display: grid;
      grid-row-gap: 1rem;
      margin: 0 auto;
      ${items.length === 3 ? styleForThree : styleForFour}
    `}
  >
    {items.map((item, index) => (
      <div
        css={css`
          margin-top: 1em;
        `}
        key={`${index}-${item.title}`}
      >
        {item.src ? (
          <img
            src={item.src}
            css={css`
              height: 3em;
              margin: 0 auto;
              display: block;
            `}
          />
        ) : (
          ''
        )}
        {item.emoji ? (
          <span
            css={css`
              text-align: center;
              display: block;
              font-size: 7rem;
            `}
          >
            {item.emoji}
          </span>
        ) : (
          ''
        )}
        <span
          css={css`
            display: block;
            text-align: center;
          `}
        >
          {item.title}
        </span>
      </div>
    ))}
  </div>
)

export default BackgroundImage
