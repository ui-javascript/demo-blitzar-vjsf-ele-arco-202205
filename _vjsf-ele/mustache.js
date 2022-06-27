import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import VueForm from '@lljj/vue3-form-element';

import {jsonSchema, uiSchema, errorSchema} from './schema/mustache.schema'

const App = {
    name: 'App',

    template: `
    <VueForm 
    v-model="formData" 
    :ui-schema="uiSchema" 
    :error-schema="errorSchema"
    :schema="schema" 
    :form-props="{
      layoutColumn: 2,
      labelWidth: '100px',
      // inlineFooter: true,
      labelPosition: 'left',
    }" 
    @submit="submit"></VueForm>
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
            formData: {
                case3: {
                    ruleList: [
                        {
                            attr: 'league',
                            relation: '>',
                            league: 'b'
                        }
                    ]
                  }
            },
            errorSchema,
            schema: jsonSchema,
            uiSchema: uiSchema,
        };
    }

}

createApp(App)
    .use(ElementPlus, {
        // size: 'small', 
        zIndex: 3000
    })
    .mount('#app')
