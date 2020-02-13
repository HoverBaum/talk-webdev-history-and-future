import { useDeck } from 'mdx-deck'

/**
 * @returns {{
 *  primary: String
 *  text: String
 *  background: String
 *  headline: String
 * }}
 */
const useColors = () => {
  const deck = useDeck()
  const { theme: { colors } = {} } = deck
  if (!colors.headline) {
    colors.headline = colors.text
  }
  return {
    ...colors,
  }
}

export default useColors
