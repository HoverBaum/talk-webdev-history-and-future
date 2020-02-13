import React from 'react'
import useColors from '../lib/useColors'

// TODO: refactor title2 to accept children so that users can have a bigger impact.

const OpeningSlide = ({ title, author, subtitle, title2 }) => {
  const colors = useColors()
  return (
    <hgroup
      css={{
        width: '70vw',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1,
      }}
    >
      <h1
        css={{
          margin: 0,
          fontSize: '2.5em',
          color: colors.headline,
          borderBottom: `1px solid ${colors.headline}`,
          paddingBottom: '1rem',
        }}
      >
        {title}
        {title2 ? ' - ' : ''}
        {title2 ? <span style={{ color: colors.primary }}>{title2}</span> : ''}
      </h1>
      {subtitle && (
        <h4
          css={{
            marginTop: '2rem',
            color: colors.primary,
          }}
        >
          {subtitle}
        </h4>
      )}
      {author && (
        <a
          href='https://hendrikwallbaum.de'
          target='_blank'
          css={{ textDecoration: 'none' }}
        >
          <h4
            css={{
              marginTop: '2rem',
              color: colors.primary,
              textAlign: 'right',
            }}
          >
            by {author}
          </h4>
        </a>
      )}
    </hgroup>
  )
}

export default OpeningSlide
