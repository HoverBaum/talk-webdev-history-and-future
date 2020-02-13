/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const Circle = ({ color }) => (
  <div
    css={css`
      border-radius: 50%;
      float: left;
      width: 12px;
      height: 12px;
      margin-right: 6px;
      transition: all 200ms ease-in-out;
      background: ${color};
    `}
  ></div>
)

export default Circle
