import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import formCreate from '@form-create/arco-design'

import rule from "./data/index.data"

const App = {
    template: `
  <div>
  <p>value: {{ value.group }}</p>
  <form-create v-model:api="fApi" v-model="value" :rule="rule" :option="options" />
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
                resetBtn: true,


                global: {
                    '*': {
                        props: {
                            // disabled: true
                        },
                        col: {
                            span: 24
                        }
                    },
                    upload: {
                        props: {
                            onError: function(){
                              alert('上传失败')
                            }
                        }
                    }
                }
            },
            
            rule, 
        }

    }
   
  }

const app = createApp(App);

app.use(ArcoVue);
app.use(formCreate);
app.mount('#app');