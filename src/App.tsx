import type { JSXElement } from 'solid-js'
import { ErrorBoundary, createSignal } from 'solid-js'
import { createStore } from 'solid-js/store'
import { css, cx } from '@emotion/css'
import darkLogo from './assets/darkLogo.svg'
import lightLogo from './assets/lightLogo.svg'
import { Store } from './types'
import Header from './components/Header'
import Wallets from './pages/Wallets'

const app = css`
  min-height: 100vh;
`

const main = css`
  position: relative;
  max-width: 45rem;
  margin: 0 auto;
  padding: 1.6rem;
  border-radius: 1.5rem;
  border: 1px solid var(--color-outline);
  box-shadow: 0 0.1rem 0.6em var(--color-shadow);
  background-color: var(--color-background-transparent);
`

const logo = css`
  position: absolute;
  z-index: -1;
  top: -18%;
  left: 50%;
  transform: translateX(-50%);
  width: 46rem;
  height: auto;
  opacity: 0.6;

  img {
    width: 100%;
    height: auto;
  }
`

const initialStore: Store = {
  wallets: {},
}

function App(): JSXElement {
  const [state, setState] = createStore(initialStore)
  const [getLogoSource, setLogoSource] = createSignal(darkLogo)

  const changeLogo = (isDark: boolean) => {
    if (isDark) {
      setLogoSource(darkLogo)
    } else {
      setLogoSource(lightLogo)
    }
  }

  return (
    <div class={cx(app)}>
      <ErrorBoundary
        fallback={(err, reset) => (
          <div onClick={reset}>Fallback on error: {err.toString()}</div>
        )}
      >
        <Header isDark={changeLogo} />

        <main class={cx(main)}>
          <div class={cx(logo)}>
            <img src={getLogoSource()} alt="Octopus logo" />
          </div>

          <Wallets stateWallets={state.wallets} />
        </main>
      </ErrorBoundary>
    </div>
  )
}

export default App
