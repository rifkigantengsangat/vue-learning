import { createApp } from 'vue'

import './index.css'
import App from './App.vue'
import {router} from './Routes'
import store from './Store/store'

const app = createApp(App)
app.use(router)
app.use(store);
app.mount('#app')
