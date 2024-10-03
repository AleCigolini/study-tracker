import { createApp } from 'vue'
import App from './App.vue'

import '@fortawesome/fontawesome-free/css/all.css'
import router from './router'

createApp(App)
    // INICIALIZAÇÃO DAS ROTAS NA APLICAÇÃO 
    .use(router)
    .mount('#app')
