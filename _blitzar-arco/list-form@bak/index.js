import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue';
import App from './index.vue';
import '@arco-design/web-vue/dist/arco.css';

const app = createApp(App);
app.use(ArcoVue, {
    componentPrefix: "",
});
app.mount('#app');