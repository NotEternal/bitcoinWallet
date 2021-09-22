import type { JSXElement } from 'solid-js'
import { css, cx } from '@emotion/css'
import Header from './components/Header'
import Main from './components/Main'

const app = css`
  min-height: 100vh;
  background-color: #222831;
  color: #eeeeee;
`

function App(): JSXElement {
  return (
    <div class={cx(app)}>
      <Header />
      <Main />
    </div>
  )
}

export default App
