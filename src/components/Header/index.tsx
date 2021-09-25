import type { JSXElement } from 'solid-js'
import { css, cx } from '@emotion/css'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'

const header = css`
  padding: 0.6rem 6%;
  margin-bottom: 7vh;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-outline);
  box-shadow: 0 0.1rem 0.6em var(--color-shadow);
  background-color: var(--color-background-transparent);
`

const logoLink = css`
  font-size: 2.2rem;
`

export default function Header(props: {
  isDark: (a: boolean) => void
}): JSXElement {
  return (
    <header class={cx(header)}>
      <a href="." title="logo" class={cx(logoLink)}>
        <Logo />
      </a>

      <ThemeToggle isDark={props.isDark} />
    </header>
  )
}
