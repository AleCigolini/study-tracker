import { createApp } from 'vue'
import App from './App.vue'

import '@fortawesome/fontawesome-free/css/all.css'
import router from './router'
import { key, store } from './store'

createApp(App)
    // INICIALIZAÇÃO DAS ROTAS NA APLICAÇÃO 
    .use(router)
    // INICIALIZAR O ESTADO GLOBAL NA APLICAÇÃO
    .use(store, key)
    .mount('#app')
