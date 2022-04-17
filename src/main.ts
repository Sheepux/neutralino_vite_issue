import App from './App.svelte'
import 'neutralinojs-types'

const app = new App({
  target: document.getElementById('app')
})

Neutralino.init();

export default app
