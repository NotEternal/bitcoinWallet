import type { JSXElement } from 'solid-js'
import { css, cx } from '@emotion/css'
import { Wallet } from '../../types'

const item = css`
  // min-width: 15rem;
  padding: 0.8rem;
  margin: 1.4%;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  border: 1px solid var(--color-outline);
  background-color: var(--color-underground);

  &:hover {
    background-color: var(--color-dark);
  }
`

const parameter = css`
  display: inline-block;
  padding: 0.5rem 0;
`

export default function Item(props: { walletData: Wallet }): JSXElement {
  const { walletData } = props

  // TODO:
  // balance
  // buttons:
  // - extra info arrow (hide the private key by default)
  // - redirect to withdraw

  return (
    <div class={cx(item)}>
      <span class={cx(parameter)}>Address: {walletData.address}</span>
      <span class={cx(parameter)}>Public key: {walletData.publicKey}</span>
      <span class={cx(parameter)}>Private key: {walletData.privateKey}</span>
    </div>
  )
}
