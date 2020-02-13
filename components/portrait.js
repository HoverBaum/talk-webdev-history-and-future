/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const dimension = '40rem'

export const Portrait = ({ src }) => (
  <img
    css={{
      width: dimension,
      height: dimension,
      maxWidth: '100%',
      boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
      borderRadius: '0.5rem 0.5rem 0 0',
    }}
    src={src}
  />
)

export default Portrait
