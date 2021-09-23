import type { JSXElement } from 'solid-js'
import { For } from 'solid-js'
import { css, cx } from '@emotion/css'
import { Wallets } from '../../types'
import Item from './Item'

const wallet = css`
  padding: 1.2rem;
  border-radius: 1.5rem;
  border: 1px solid var(--color-outline);
  box-shadow: 0 0.1rem 0.6em var(--color-shadow);
`

const title = css`
  margin: 0;
  margin-bottom: 1.4rem;
  padding: 0.6rem;
`

const walletsWrapper = css`
  display: flex;
  flex-wrap: wrap;
`

const noWallets = css`
  padding: 0 1rem;
`

export default function Wallet(props: { wallets: Wallets }): JSXElement {
  const { wallets } = props

  return (
    <section class={cx(wallet)}>
      <h2 class={cx(title)}>Your wallets</h2>

      <div class={cx(walletsWrapper)}>
        {Object.values(wallets).length ? (
          <For each={Object.values(wallets)} fallback={<div>loading...</div>}>
            {(walletData) => <Item walletData={walletData} />}
          </For>
        ) : (
          <p class={cx(noWallets)}>You have no wallets</p>
        )}
      </div>
    </section>
  )
}
