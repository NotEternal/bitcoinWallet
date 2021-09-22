import type { JSXElement } from 'solid-js'
import { css, cx } from '@emotion/css'

const main = css`
  padding: 2rem 4%;
`

export default function Main(props: any): JSXElement {
  const { children } = props

  return <main class={cx(main)}>{children}</main>
}
