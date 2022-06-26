import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import formCreate from '@form-create/arco-design'

import rule from "./data/marker.data"

const App = {
    template: `
  <div>
  <p>value: {{ value.group }}</p>
  <form-create v-model:api="fApi" v-model="value" :rule="rule" :option="options" />

<ASpace>
  <AButton @click="append">追加表单</AButton>

  <AButton @click="reset">重置下拉框选项</AButton>
</ASpace>

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
            },

            rule,

            i: 0,
            disabled: false,
        }

    },

    computed:{
        title(){
            return this.disabled ? '简介(禁用)' : '简介'
        }
    },

    methods: {
        swatch() {
            this.disabled = !this.disabled
        },

        getRule() {
            this.i++
            return this.$formCreate.maker.input('追加组件' + this.i, 'input' + this.i, '')
        },
        append() {

            this.rule.push(this.getRule())

            this.swatch()
            this.fApi.disabled(this.disabled, 'info')
            this.rule[0].title = this.title
        },

        getOption(){
            this.i++
            return {value:this.i, label:String(this.i).repeat(5)}
        },

        reset(){
            this.fApi.updateRule('select', {
                options: [this.getOption()]
            }, true)
        }
    }

}

const app = createApp(App);

app.use(ArcoVue);
app.use(formCreate);
app.mount('#app');