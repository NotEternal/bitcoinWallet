import type { JSXElement } from 'solid-js'
import { css, cx } from '@emotion/css'

const wallet = css`
  border: 1px solid green;
  border-radius: 0.5rem;
`

export default function Wallet(): JSXElement {
  return (
    <section class={cx(wallet)}>
      <h2>wallet</h2>
    </section>
  )
}
