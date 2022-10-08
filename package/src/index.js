import 'vite/modulepreload-polyfill'

import './style.css'
import MButton from './components/MButton.vue'

export default {
    install: (app, options) => {
        app.component('MButton', MButton)
    }
}