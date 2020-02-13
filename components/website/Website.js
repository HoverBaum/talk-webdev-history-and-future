/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Circle from './Circle'
import stylesForReset from './resetStyles'

import useColors from '../../lib/useColors'
import useHDC from '../../lib/useHDC'

const headerHeight = '35px'

const Website = ({ children, resetStyles, title }) => {
  const colors = useColors()
  const { darkMode } = useHDC()
  return (
    <div
      css={css`
        box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.25),
          -3px -3px 6px rgba(255, 255, 255, 0.2);
        border-radius: 0.5rem;
        overflow: hidden;
        background-color: ${darkMode ? colors.text : colors.background};
        color: ${darkMode ? colors.background : colors.text};
        margin: 0 auto;
      `}
    >
      <div
        css={css`
          background: #eee;
          height: ${headerHeight};
          width: 100%;
          padding-left: 1rem;
          display: flex;
          align-items: center;
          position: relative;
        `}
      >
        <Circle color="#FF3E58" />
        <Circle color="#FFBF00" />
        <Circle color="#00DB43" />
        <span
          css={css`
            font-size: 1rem;
            line-height: ${headerHeight};
            text-align: center;
            width: 100%;
            position: absolute;
            display: block;
            top: 0;
            left: 0;
            font-weight: normal;
          `}
        >
          {title}
        </span>
      </div>
      <div
        css={css`
          padding: 2rem;
          min-width: 50rem;
          max-height: 100%;
          box-sizing: border-box;
          overflow-y: scroll;
          ${resetStyles && stylesForReset}
        `}
      >
        {children}
      </div>
    </div>
  )
}

export default Website
