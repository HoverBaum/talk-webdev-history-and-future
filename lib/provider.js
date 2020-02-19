/** @jsx jsx */
import { css, jsx, Global } from '@emotion/core'
import { useDeck } from 'mdx-deck'
import { Fragment } from 'react'
import useColors from './useColors'

const Provider = ({ children }) => {
  const state = useDeck()
  const colors = useColors()

  // Set the base rem according to screen resolution.
  let screenWidth = 1280
  if (typeof window !== `undefined`) {
    screenWidth = document.querySelector('body').clientWidth
  }

  let baseFontSize = 16
  if (screenWidth >= 1920) baseFontSize = 22

  return (
    <Fragment>
      <Global
        styles={css`
          html {
            font-size: ${baseFontSize}px;
          }
          h1,
          h2,
          h3,
          h4,
          h5 {
            margin-top: 0;
          }
        `}
      />
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

        {state.index === 0 || state.index === state.length - 1 ? (
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
    </Fragment>
  )
}

export default Provider
