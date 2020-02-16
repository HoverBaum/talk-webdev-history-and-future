/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import imgBoids from './boids.png'

const Boids = () => (
  <img
    css={css`
      position: absolute;
      bottom: 0;
      right: 0;
      width: 25rem;
    `}
    src={imgBoids}
  />
)

export default Boids
