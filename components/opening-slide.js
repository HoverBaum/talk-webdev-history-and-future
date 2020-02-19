/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import useColors from '../lib/useColors'

// TODO: refactor title2 to accept children so that users can have a bigger impact.

const OpeningSlide = ({ title, author, subtitle, title2 }) => {
  const colors = useColors()
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
        width: '100%'
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
            borderBottom: `1px solid ${colors.headline}`,
            paddingBottom: '1rem'
          }}
        >
          {title}
          {title2 ? ' - ' : ''}
          {title2 ? (
            <span style={{ color: colors.primary }}>{title2}</span>
          ) : (
            ''
          )}
        </h1>
        {subtitle && (
          <h4
            css={{
              marginTop: '2rem',
              color: colors.primary
            }}
          >
            {subtitle}
          </h4>
        )}
        {author && (
          <a
            href="https://hendrikwallbaum.de"
            target="_blank"
            css={{ textDecoration: 'none' }}
          >
            <h4
              css={css`
                color: ${colors.primary};
                text-align: right;
                position: absolute;
                bottom: 2rem;
                right: 6rem;
              `}
            >
              by {author}
            </h4>
          </a>
        )}
      </hgroup>
    </div>
  )
}

export default OpeningSlide
