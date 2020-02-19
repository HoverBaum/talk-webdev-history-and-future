/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Credit from './credit'

export const BackgroundImage = ({
  src,
  credit,
  creditLink,
  blur,
  children
}) => {
  return (
    <div
      css={css`
        background: url(${src}) no-repeat center;
        background-size: cover;
        ${blur
          ? css`
              filter: blur(5px);
            `
          : ''}
        width: 100vw;
        height: 100vh;
        position: absolute;
        z-index: 0;
        top: 0;
        left: 0;
        &:after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background-image: linear-gradient(
            to top right,
            #002f4b,
            #7473bd,
            #dc4225
          );
          opacity: 0.8;
        }
      `}
    >
      {children && children}
      {credit ? <Credit credit={credit} creditLink={creditLink} onImage /> : ''}
    </div>
  )
}
export default BackgroundImage
