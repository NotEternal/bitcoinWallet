import type { JSXElement } from 'solid-js'
import { ErrorBoundary } from 'solid-js'
import { createStore } from 'solid-js/store'
import { css, cx } from '@emotion/css'
import { Store } from './types'
import Header from './components/Header'
import Wallets from './pages/Wallets'

const app = css`
  min-height: 100vh;
`

const main = css`
  max-width: 50rem;
  margin: 0 auto;
  padding: 2rem;
`

const initialStore: Store = {
  wallets: {},
}

function App(): JSXElement {
  const [state, setState] = createStore(initialStore)

  return (
    <div class={cx(app)}>
      <ErrorBoundary
        fallback={(err, reset) => (
          <div onClick={reset}>Fallback on error: {err.toString()}</div>
        )}
      >
        <Header />

        <main class={cx(main)}>
          <Wallets stateWallets={state.wallets} />
        </main>
      </ErrorBoundary>
    </div>
  )
}

export default App
