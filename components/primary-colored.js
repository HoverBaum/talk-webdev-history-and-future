/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import useColors from '../lib/useColors'

const PrimaryColored = ({ children }) => {
  const { primary } = useColors()
  return (
    <span
      css={css`
        color: ${primary};
      `}
    >
      {children}
    </span>
  )
}

export default PrimaryColored
