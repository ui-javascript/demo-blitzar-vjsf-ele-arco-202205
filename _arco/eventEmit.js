import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import formCreate from '@form-create/arco-design'

import rule from "./data/eventEmit"

const App = {
    template: `
  <div>
 <p>value: {{ value.group }}</p>
  <form-create v-model:api="fApi" v-model="value" 
  :rule="rule" :option="options" />
  </div>
    `,
    data() {
        return {
            fApi: {},

            value: {},
            
            options: {
                onSubmit: (formData) => {
                    alert(JSON.stringify(formData))
                },
                // resetBtn: false,
                // submitBtn: false,
            },
            
            rule, 
        }

    },

    methods:{

        change(){
            alert(`change: "${this.fApi.getValue('inputField')}"`)
        },

        blur(){
            alert('blur!')
        }
    },

    mounted() {
        this.fApi.on('prefix1-change',this.change)
        this.fApi.on('input-field2-blur',this.blur)
    }
   
  }

const app = createApp(App);

app.use(ArcoVue);
app.use(formCreate);
app.mount('#app');