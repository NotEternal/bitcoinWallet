import type { JSXElement } from 'solid-js'
import { css, cx } from '@emotion/css'

const header = css`
  padding: 0.6rem 4%;
  border-bottom: 1px solid #ffffff24;
`

export default function Header(): JSXElement {
  return <header class={cx(header)}>{/*  */}</header>
}
