/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useDeck } from 'mdx-deck'
import useColors from './useColors'

const Provider = ({ children }) => {
  const state = useDeck()
  const colors = useColors()

  return (
    <div
      css={css`
        font-weight: 300;
        letter-spacing: 0.1em;
        color: ${colors.text};
        background-color: ${colors.background};

        & li {
          margin: 0.75rem 0;
        }

        & sup {
          font-weight: normal;
          font-size: 0.66em;
        }

        & ol {
          padding-left: 4rem;
        }
      `}
    >
      {children}

      {state.index === 0 ? (
        ''
      ) : (
        <p
          css={css`
            position: fixed;
            bottom: 1rem;
            right: 1rem;
            font-size: 1.25rem;
            margin: 0;
            font-weight: 300;
            font-family: sans-serif;
          `}
        >
          <span>{state.index}</span>/<span>{state.length - 1}</span>
        </p>
      )}
    </div>
  )
}

export default Provider
