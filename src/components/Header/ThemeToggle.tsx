import { JSXElement, createSignal, createEffect } from 'solid-js'
import { css, cx } from '@emotion/css'

const themeButton = css`
  background-color: transparent;
  border: none;
  font-size: 2.2rem;
`

export default function ThemeToggle(props: {
  isDark: (a: boolean) => void
}): JSXElement {
  const [getIsDark, setIsDark] = createSignal(true)

  createEffect(() => props.isDark(getIsDark()))

  const switchTheme = () => {
    setIsDark(!getIsDark())

    if (getIsDark()) {
      document.body.classList.remove('light')
    } else {
      document.body.classList.add('light')
    }
  }

  return (
    <button onClick={switchTheme} class={cx(themeButton)}>
      {getIsDark() ? (
        <svg width="1em" height="1em" viewBox="0 0 24 24">
          <path
            opacity=".3"
            d="M9.37 5.51A7.35 7.35 0 0 0 9.1 7.5c0 4.08 3.32 7.4 7.4 7.4c.68 0 1.35-.09 1.99-.27A7.014 7.014 0 0 1 12 19c-3.86 0-7-3.14-7-7c0-2.93 1.81-5.45 4.37-6.49z"
            fill="currentColor"
          ></path>
          <path
            d="M9.37 5.51A7.35 7.35 0 0 0 9.1 7.5c0 4.08 3.32 7.4 7.4 7.4c.68 0 1.35-.09 1.99-.27A7.014 7.014 0 0 1 12 19c-3.86 0-7-3.14-7-7c0-2.93 1.81-5.45 4.37-6.49zM12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26a5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"
            fill="currentColor"
          ></path>
        </svg>
      ) : (
        <svg width="1em" height="1em" viewBox="0 0 256 256">
          <circle
            cx="128"
            cy="128"
            r="60"
            opacity=".2"
            fill="currentColor"
          ></circle>
          <path
            d="M128 60a68 68 0 1 0 68 68a68.077 68.077 0 0 0-68-68zm0 120a52 52 0 1 1 52-52a52.059 52.059 0 0 1-52 52zm-8-144v-8a8 8 0 0 1 16 0v8a8 8 0 0 1-16 0zM51.633 62.946a8 8 0 1 1 11.313-11.313l5.657 5.657a8 8 0 0 1-11.314 11.313zM44 128a8 8 0 0 1-8 8h-8a8 8 0 0 1 0-16h8a8 8 0 0 1 8 8zm24.603 59.397a8 8 0 0 1 0 11.313l-5.657 5.657a8 8 0 0 1-11.313-11.313l5.657-5.657a8 8 0 0 1 11.313 0zM136 220v8a8 8 0 0 1-16 0v-8a8 8 0 0 1 16 0zm68.367-26.946a8 8 0 1 1-11.313 11.313l-5.657-5.657a8 8 0 0 1 11.313-11.313zM236 128a8 8 0 0 1-8 8h-8a8 8 0 0 1 0-16h8a8 8 0 0 1 8 8zm-48.603-59.397a8 8 0 0 1 0-11.313l5.657-5.657a8 8 0 1 1 11.313 11.313l-5.656 5.657a8 8 0 0 1-11.314 0z"
            fill="currentColor"
          ></path>
        </svg>
      )}
    </button>
  )
}
