/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import useColors from '../lib/useColors'

const ClosingSlide = ({ title, author }) => {
  const colors = useColors()
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        textAlign: 'center'
      }}
    >
      <hgroup
        css={css`
          z-index: 1;
        `}
      >
        <h1
          css={{
            margin: 0,
            fontSize: '2.5em',
            color: colors.headline,
            paddingBottom: '1rem'
          }}
        >
          {title}
        </h1>
        {author && (
          <a
            href="https://hendrikwallbaum.de"
            target="_blank"
            css={{ textDecoration: 'none' }}
          >
            <h4
              css={css`
                color: ${colors.primary};
              `}
            >
              {author}
            </h4>
          </a>
        )}
      </hgroup>
    </div>
  )
}

export default ClosingSlide
