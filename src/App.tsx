import type { JSXElement } from 'solid-js'
import { css, cx } from '@emotion/css'
import Header from './components/Header'
import Wallet from './pages/Wallet'

const app = css`
  min-height: 100vh;
`

const main = css`
  max-width: 50rem;
  margin: 0 auto;
  padding: 2rem 4%;
`

function App(): JSXElement {
  return (
    <div class={cx(app)}>
      <Header />

      <main class={cx(main)}>
        <Wallet />
      </main>
    </div>
  )
}

export default App
