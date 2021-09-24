import type { JSXElement } from 'solid-js'
import { css, cx } from '@emotion/css'
import { Wallet } from '../../types'

const item = css`
  padding: 0.8rem;
  margin: 1.4%;
  display: flex;
  flex: 45%;
  flex-direction: column;
  border-radius: 1rem;
  border: 1px solid var(--color-outline);
  background-color: var(--color-underground);

  &:hover {
    background-color: var(--color-underground-hover);
  }
`

const parameter = css`
  display: inline-block;
  padding: 0.5rem 0;
`

export default function Item(props: { walletData: Wallet }): JSXElement {
  // TODO:
  // balance
  // buttons:
  // - extra info arrow (hide the private key by default)
  // - redirect to withdraw

  return (
    <div class={cx(item)}>
      <span class={cx(parameter)}>Address: {props.walletData.address}</span>
      <span class={cx(parameter)}>
        Public key: {props.walletData.publicKey}
      </span>
      <span class={cx(parameter)}>
        Private key: {props.walletData.privateKey}
      </span>
    </div>
  )
}
