import { createApp } from 'vue'
import App from './jsonform-elementplus.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App)
    .use(ElementPlus, { 
        // size: 'small', 
        zIndex: 3000 
    })
    .mount('#app')
