/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import useHDC from '../lib/useHDC'

/**
 * Renders an alternate image on dark mode slides.
 * You cann supply additional properties that will be handed
 * to the native "img" element.
 * @param {String} src Source for the image.
 * @param {String} darkSrc Alternative source for image in dark mode.
 */
const ModeImage = ({ src, darkSrc, ...props }) => {
  const { darkMode } = useHDC()
  return <img src={darkMode && darkSrc ? darkSrc : src} {...props} />
}

export default ModeImage
