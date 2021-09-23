import { render } from 'solid-js/web'
import { injectGlobal } from '@emotion/css'
import App from './App'

injectGlobal`
  html {
    --color-background: #111111;
    --color: #94a1b2;
    --color-headline: #fffffe;
    --color-secondary: #72757e;
    --color-brand: #7f5af0;
    --color-special: #2cb67d;
    --color-outline: #212121;
    --color-underground: rgba(0, 0, 0, 0.35);
    --color-shadow: #090909;

    background: var(--color-background);
    color: var(--color);
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  body {
    min-height: 100vh;
    font-size: 18px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-variant: none;
    font-feature-settings: 'ss01' on, 'ss02' on, 'cv01' on, 'cv03' on;
    box-sizing: border-box;
  }

  *,
  :before,
  :after {
    box-sizing: inherit;
  }

  input,
  textarea,
  button,
  label {
    cursor: pointer;
    font-size: inherit;
    font-family: inherit;
    color: inherit;
    transition: .1s;
  }

  button {
    user-select: none;
    transition: .2s;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  a {
    display: inline-block;
    position: relative;
    text-decoration: none;
    color: var(--color-special);
    transition: .2s;
  }

  a:hover {
    opacity: .6;
  }

  h1,
  h2,
  h3,
  h4 {
    color: var(--color-headline);
  }
`

render(() => <App />, document.getElementById('root'))
