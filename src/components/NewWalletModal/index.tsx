import type { JSXElement } from 'solid-js'
import { css, cx } from '@emotion/css'
import { Wallet } from '../../types'

const overlay = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-underground);
`

const modal = css`
  padding: 1.6rem;
  border-radius: 1.2rem;
  border: 1px solid var(--color-outline);
  box-shadow: 0 0.1rem 0.6em var(--color-shadow);
  background-color: var(--color-background);
`

const header = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-outline);
`

export default function NewWalletModal(props: {
  getWallet: (newWallet: Wallet) => void
  close: () => void
}): JSXElement {
  // 1 - choose chain
  // 2 - generate wallet
  // 3 - return wallet

  return (
    <div class={cx(overlay)}>
      <div class={cx(modal)}>
        <div class={cx(header)}>
          <h2>New wallet</h2>
          <button onClick={close}>close</button>
        </div>

        <p>Choose wallets blockchain</p>
      </div>
    </div>
  )
}
