/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import imgBoids from './boids.png'

const Boids = ({ left }) => (
  <img
    css={css`
      position: absolute;
      bottom: 0;
      ${!left &&
        css`
          right: 0;
        `}
      ${left &&
        css`
          left: 0;
          transform: translateX(-25%) translateY(25%);
        `}
      width: 20rem;
      opacity: 0.66;
    `}
    src={imgBoids}
  />
)

export default Boids
