import type { JSXElement } from 'solid-js'
import { For, Show, createSignal } from 'solid-js'
import { css, cx } from '@emotion/css'
import * as types from '../../types'
import NewWalletModal from '../../components/NewWalletModal'
import Item from './Item'

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
  padding: 1rem;
`

const message = css`
  padding: 0;
  margin: 0;
`

const creationButton = css`
  margin-top: 1rem;
  border: none;
  background-color: var(--color-brand);
`

export default function Wallets(props: {
  stateWallets: types.Wallets
}): JSXElement {
  const [getShowModal, setShowModal] = createSignal(false)
  const showModal = () => setShowModal(true)
  const hideModal = () => setShowModal(false)

  console.log('getShowModal() ', getShowModal())

  const getWallet = (newWallet: types.Wallet) => {
    console.log(newWallet)
  }

  return (
    <section>
      <h2 class={cx(title)}>Your wallets</h2>

      <div class={cx(walletsWrapper)}>
        {Object.values(props.stateWallets).length ? (
          <For
            each={Object.values(props.stateWallets)}
            fallback={<div>loading...</div>}
          >
            {(walletData) => <Item walletData={walletData} />}
          </For>
        ) : (
          <div class={cx(noWallets)}>
            <p class={cx(message)}>You have no wallets</p>
            <button class={cx(creationButton)} onClick={showModal}>
              Create a wallet
            </button>
          </div>
        )}
      </div>

      <Show when={getShowModal()}>
        <NewWalletModal getWallet={getWallet} close={hideModal} />
      </Show>
    </section>
  )
}
