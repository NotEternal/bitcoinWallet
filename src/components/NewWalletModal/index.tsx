import type { JSXElement } from 'solid-js'
import { For } from 'solid-js'
import { css, cx } from '@emotion/css'
import * as configs from '../../configs'
import * as constants from '../../constants'
import * as types from '../../types'
import { createWallet } from '../../utils/evmWallet'

const overlay = css`
  position: fixed;
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

const optionsWrapper = css`
  max-width: 36rem;
  display: flex;
  flex-wrap: wrap;
  border-radius: 0.8rem;
`

const chainInfo = css`
  flex: 43%;
  display: flex;
  flex-direction: column;
  margin: 0.2rem;
  padding: 1rem;
  border-radius: 0.6rem;
  background: var(--color-underground);

  .name {
    margin: 0;
  }

  .creationButton {
    margin-top: 0.6rem;
  }
`

export default function NewWalletModal(props: {
  getWallet: (newWallet: types.Wallet) => void
  close: () => void
}): JSXElement {
  const startCreation = (chainId: number) => {
    const newWallet = createWallet({ chainId })

    console.log('newWallet: ', newWallet)
  }

  return (
    <section class={cx(overlay)}>
      <div class={cx(modal)}>
        <div class={cx(header)}>
          <h2>New wallet</h2>
          <button onClick={props.close}>Close</button>
        </div>

        <p>Choose wallets blockchain</p>

        <div class={cx(optionsWrapper)}>
          {Object.values(constants.blockchains).length ? (
            <For each={Object.values(constants.blockchains)}>
              {(chainId) => {
                if (!configs.blockchains[chainId]) return null

                const { name, explorer } = configs.blockchains[chainId]

                return (
                  <div class={cx(chainInfo)}>
                    <h3 class="name">{name}</h3>
                    <a href={explorer} target="_blank">
                      Explorer
                    </a>
                    <button
                      class="creationButton"
                      onClick={() => startCreation(chainId)}
                    >
                      Create
                    </button>
                  </div>
                )
              }}
            </For>
          ) : (
            <p>No available blockchains</p>
          )}
        </div>
      </div>
    </section>
  )
}
