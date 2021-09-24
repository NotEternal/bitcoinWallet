import type { JSXElement } from 'solid-js'
import { ErrorBoundary } from 'solid-js'
import { createStore } from 'solid-js/store'
import { css, cx } from '@emotion/css'
import { Store } from './types'
import Header from './components/Header'
import Wallet from './pages/Wallet'

const app = css`
  min-height: 100vh;
`

const main = css`
  max-width: 50rem;
  margin: 0 auto;
  padding: 2rem;
`

const initialStore: Store = {
  wallets: {
        asd1ug1u2g12g3123h: {
      chainId: 1,
      address: 'kg234gl23g4lk2134g3',
      publicKey: 'kg234gl23g4lk2134g3',
      privateKey: 'kg234gl23g4lk2134g3',
    },
    asd1ugsdf1u2g12g3123h: {
      chainId: 1,
      address: 'kg234gl23g4lk2134g3',
      publicKey: 'kg234gl23g4lk2134g3',
      privateKey: 'kg234gl23g4lk2134g3',
    },
    asd1ugsdf1u2g1122g3123h: {
      chainId: 1,
      address: 'kg234gl23g4lk2134g3',
      publicKey: 'kg234gl23g4lk2134g3',
      privateKey: 'kg234gl23g4lk2134g3',
    },
    asd1u2134g1u2g12g3123h: {
      chainId: 1,
      address: 'kg234gl23g4lk2134g3',
      publicKey: 'kg234gl23g4lk2134g3',
      privateKey: 'kg234gl23g4lk2134g3',
    }
  },
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
          <Wallet wallets={state.wallets} />
        </main>
      </ErrorBoundary>
    </div>
  )
}

export default App
