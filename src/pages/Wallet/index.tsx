import type { JSXElement } from 'solid-js'
import { css, cx } from '@emotion/css'

const wallet = css`
  padding: 1.2rem;
  border-radius: 1.5rem;
  border: 1px solid var(--color-outline);
  box-shadow: 0 0.1rem 0.6em var(--color-shadow);
`

export default function Wallet(): JSXElement {
  return (
    <section class={cx(wallet)}>
      <h2>wallet</h2>
    </section>
  )
}
