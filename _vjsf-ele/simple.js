import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueForm from '@lljj/vue3-form-element';

import jsonSchema from './data/simple'

const App = {
    template: `
    <VueForm v-model="formData" :schema="schema" 
    :formProps="{
      layoutColumn: 2,
      labelWidth: '100px',
      // inlineFooter: true,
      labelPosition: 'left',
    }" @submit="submit">
    </VueForm>
    `,

    components: {
        VueForm
    },

    methods: {
        submit(item) {
            alert(JSON.stringify(item.value))
        }
    },

    data() {
        return {
            formData: {},
            schema: jsonSchema
        };
    }

}

createApp(App)
    .use(ElementPlus, {
        // size: 'small', 
        zIndex: 3000
    })
    .mount('#app')
