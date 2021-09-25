import { render } from 'solid-js/web'
import { injectGlobal } from '@emotion/css'
import App from './App'

injectGlobal`
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJfecg.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  body {
    --color-background: #111111;
    --color-background-transparent: #11111199;
    --color: #94a1b2;
    --color-headline: #fffffe;
    --color-secondary: #72757e;
    --color-brand: #ef4565;
    --color-special: #3da9fc;
    --color-outline: #212121;
    --color-underground: rgba(0, 0, 0, 0.35);
    --color-shadow: #090909;
    --color-underground-hover: #000;

    box-sizing: border-box;
    min-height: 100vh;
    font-size: 18px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-variant: none;
    letter-spacing: .07rem;
    font-feature-settings: 'ss01' on, 'ss02' on, 'cv01' on, 'cv03' on;
    background: var(--color-background);
    color: var(--color);
    font-family: 'Poppins';
  }

  body.light {
    --color-background: #fffffe;
    --color-background-transparent: #fffffe99;
    --color: #5e6671;
    --color-headline: #111111;
    --color-secondary: #72757e;
    --color-outline: #dfdfdf;
    --color-underground: #dedede59;
    --color-shadow: #dfdfdf;
    --color-underground-hover: #dedede91;

    background: var(--color-background);
    color: var(--color);
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
    padding: 0.3rem 0.8rem;
    border-radius: 0.6rem;
    border: 1px solid var(--color-outline);
    letter-spacing: .07rem;
    color: var(--color-headline);
    background-color: transparent;
    transition: .18s;
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
