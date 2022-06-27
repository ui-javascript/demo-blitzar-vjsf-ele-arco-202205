<template>
  <FormProvider :form="form">
    <SchemaField :schema="schema" />
    <Submit @submit="log">提交</Submit>
  </FormProvider>
</template>

<script  setup>
import { createForm, onFieldChange, onFieldReact } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/vue'
import {
  Submit,
  FormItem,
  ArrayTable,
  Input,
  Editable,
  Switch,
} from '@formily/element-plus'
import schema from "./index.schema"

const { SchemaField } = createSchemaField({
  components: {
    FormItem,
    ArrayTable,
    Input,
    Editable,
    Switch,
  },
})

const form = createForm({
  effects: () => {
    //主动联动模式
    onFieldChange('hideFirstColumn', ['value'], (field) => {
      field.query('array.column3').take((target) => {
        target.visible = !field.value
      })
      field.query('array.*.a2').take((target) => {
        target.visible = !field.value
      })
    })
    //被动联动模式
    onFieldReact('array.*.a2', (field) => {
      field.visible = !field.query('.a1').get('value')
    })
  },
})

const log = (...v) => {
  console.log(...v)
}
</script>