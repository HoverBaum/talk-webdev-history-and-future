import { useDeck } from 'mdx-deck'

const defaultValues = {
  darkMode: false,
}

/**
 * @returns {{
 *  darkMode: boolean
 * }}
 */
const useColors = () => {
  const deck = useDeck()
  const { theme: { hdc } = {} } = deck
  return { ...defaultValues, ...hdc }
}

export default useColors
