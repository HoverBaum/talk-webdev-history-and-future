/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useState } from 'react'
import useColors from '../lib/useColors'
import useHDC from '../lib/useHDC'
import './counter.css'

const Counter = () => {
  const [state, setState] = useState({
    count: 0,
    displayMessage: false,
  })
  const colors = useColors()
  const { darkMode } = useHDC()

  const onIncrement = () => {
    setState({ ...state, count: state.count + 1 })
  }

  const onDisplayMessage = () => {
    setState({ ...state, displayMessage: true })
  }

  const { count, displayMessage } = state
  return (
    <div
      css={css`
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        border-radius: 0.5rem;
        overflow: hidden;
        background-color: ${darkMode ? colors.text : colors.background};
        color: ${darkMode ? colors.background : colors.text};
      `}
    >
      <div className='website__header'>
        <div className='website__header__circle' />
        <div className='website__header__circle' />
        <div className='website__header__circle' />
      </div>
      <div
        css={css`
          padding: 2rem;
          min-width: 50rem;
        `}
      >
        <h2 css={{ marginTop: 0, fontWeight: 'normal' }}>Testing Page</h2>

        <button style={{ fontSize: '2rem' }} onClick={onIncrement}>
          Increment
        </button>

        <p>Current count: {count}</p>

        <button style={{ fontSize: '2rem' }} onClick={onDisplayMessage}>
          Display Message
        </button>

        {displayMessage ? (
          <div>A message here</div>
        ) : (
          <div style={{ height: '1.2em' }} />
        )}
      </div>
    </div>
  )
}

export default Counter
