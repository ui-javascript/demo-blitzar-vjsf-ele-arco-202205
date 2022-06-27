import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue';
import App from './index.vue';
import '@arco-design/web-vue/dist/arco.css';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App);
app.use(ArcoVue, {
    componentPrefix: "",
});
app.use(ElementPlus, {
    // size: 'small', 
    zIndex: 3000
})
app.mount('#app');